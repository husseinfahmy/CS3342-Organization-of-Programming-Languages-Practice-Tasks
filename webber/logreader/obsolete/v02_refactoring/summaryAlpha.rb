class KnownTasks
  def initialize(known_task_file_name)
   # need to read file into memory
   # https://mauricio.github.io/2014/08/03/quick-tips-for-doing-io-with-ruby.html
   # http://ruby-doc.org/core-2.0.0/IO.html
   @tasks = Array.new
   IO.read(known_task_file_name).each_line do | line |
      @tasks.push(line.delete("\n"))
   end
   # each_line defined in https://ruby-doc.org/core-2.2.0/String.html
   # array stuff in https://ruby-doc.org/core-2.2.0/Array.html
   # also useful was http://stackoverflow.com/questions/17132262/removing-line-breaks-in-ruby
  end
  def known?(task_name)
    # http://stackoverflow.com/questions/1986386/check-if-a-value-exists-in-an-array-in-ruby
    @tasks.include?(task_name)
  end
  def print(config)
    @tasks.each do | line |
      config.putsq line
    end
  end
end

class TimeLogEntry
  # https://ruby-doc.org/core-2.4.0/Comparable.html
  include Comparable
  def <=>(other)
    @commit_id <=> other.commit_id
  end

  attr_reader :commit_id, :task_name, :minutes

  def initialize(config, entry_string, known_tasks)
    # 
    # https://ruby-doc.org/core-2.2.0/String.html#method-i-split
    entry_array = entry_string.split
    @commit_id = entry_array[0]
    if entry_array[1] != "time" then
      # handle error situations
      # http://blog.honeybadger.io/how-to-exit-a-ruby-program/
      # http://phrogz.net/programmingruby/tut_exceptions.html
      # https://ruby-doc.org/core-2.4.0/Kernel.html for catch and throw
      config.puterr "ERROR: missing time keyword in time log entry"
      config.puterr entry_string
      throw :internal_error
    end
    if not known_tasks.known?(entry_array[2]) then
      config.putsq "WARNING: skipping this log entry because unknown task " + entry_array[2]
      config.putsq entry_string
      throw :skip_entry
    end
    @task_name = entry_array[2]
    @minutes = entry_array[3].to_i
    if @minutes == 0 then
      config.putsq "WARNING: skipping this log entry because bad integer value or 0"
      config.putsq entry_string
      throw :skip_entry
    end
  end
  def threshold!(config, upper_bound)
    if upper_bound < 0 then
      config.puterr "ERROR: negative upper_bound " + (upper_bound.to_s)
      throw :internal_error
    end
    if @minutes >= upper_bound then
       config.putsq "WARNING: minutes reduced to "+ (upper_bound.to_s) + " from " + (@minutes.to_s)
       self.print(config)
       @minutes = upper_bound
    end
    if @minutes <= -upper_bound then
       config.putsq "WARNING: minutes raise to "+ (upper_bound.to_s) + " from " + (@minutes.to_s)
       self.print(config)
       @minutes = -upper_bound
    end
    self
  end
  def print(config)
    config.putsq @commit_id + " " + @task_name + " " + (@minutes.to_s)
  end
end

class TimeLog
  def initialize(config, time_log_source, known_tasks = nil)
    # http://stackoverflow.com/questions/3958735/in-ruby-is-there-a-way-to-overload-the-initialize-constructor
    if time_log_source.class == Array then
      @log = time_log_source
      return
    end
    # otherwise, assume time_log_source is a string
    @log = Array.new
    time_log_source.each_line do | line |
      catch :skip_entry do
        @log.push(TimeLogEntry.new(config, line, known_tasks))
      end
    end
  end
  def include?(entry)
    @log.include?(entry)
  end
  def remove(config, old_log)
    log = @log.keep_if do | entry |
      ! old_log.include?(entry)
    end   
    TimeLog.new(config, log)
  end
  def threshold!(config, bound)
    log = @log.map do | entry |
      entry.threshold!(config, bound)
    end   
    TimeLog.new(config, log)
  end
  def each(&block)
    @log.each do | entry |
      block.call(entry)
    end
  end
  def print(config)
    @log.each do | entry |
       entry.print(config)
    end
  end
end

class OldTimeLog 
  def initialize(config, old_time_log_file_name, known_tasks)
    @time_log = TimeLog.new(config, IO.read(old_time_log_file_name), known_tasks)
  end
  def print(config)
    @time_log.print(config)
  end
  def include?(entry)
    @time_log.include?(entry)
  end
end

class NewTimeLog 
  def initialize(config, known_tasks)
    #use of back quotes in Ruby: http://ruby-doc.org/core-2.4.0/Kernel.html#method-i-60
    stdout = `git --no-pager log --pretty=oneline --grep "^time "`
    @time_log = TimeLog.new(config, stdout, known_tasks)
  end
  def print(config)
    @time_log.print(config)
  end
  def report!(config, old_log)
    @time_log = @time_log.remove(config, old_log)
    @time_log = @time_log.threshold!(config, config.max_session_time)
    TimeLogReport.new(@time_log).analyze
  end
end

class TimeLogReport
  def initialize(time_log)
    @time_log = time_log
    @report = Hash.new
    @total = 0
    # hash tables explained https://ruby-doc.org/core-2.2.0/Hash.html
  end
  def analyze()
    @time_log.each do | entry |
       task_name = entry.task_name
       minutes = entry.minutes
       if @report.has_key?(task_name) then
         @report[task_name] = @report[task_name] + minutes
       else
         @report[task_name] = minutes
       end
       @total = @total + minutes
    end
    self
  end
  def print(config)
    config.putsq "----- Time Log Report"
    config.putsq "------- By Task"
    @report.each do | task, minutes |
      puts "total time spent on task " + task + " was " + (minutes.to_s)
    end
    config.putsq "total time on all tasks according to this log was " + (@total.to_s)
    if @total > config.max_week_time then
       config.putsq "Note: time reported in excess of 180 minutes does not count toward practice"
       @total = config.max_week_time
    end
    puts "the percentage of weekly required practice time spent so far is " + (((100.0 * @total)/180.0).to_s) + "% (target is 100.0%)"
  end
end

class Config
  attr_accessor :date, :report_type, :quiet, :error_out, :max_session_time, :max_week_time
  def initialize()
    @date = "unknown"
    @report_type = :general
    @quiet = false
    @error_out = STDERR
    @max_session_time = 60
    @max_week_time = 180
  end
  def putsq(message)
    puts message unless @quiet
  end
  def puterr(message)
    @error_out.puts message
  end
end

config = Config.new()
# http://alvinalexander.com/blog/post/ruby/how-read-command-line-arguments-args-script-program

config.putsq "----- Beginning to process log file"
config.putsq "----- First read known task list"
known_tasks = KnownTasks.new("knowntasks")
known_tasks.print(config)
config.putsq "----- Fetching list of already processed practice times"
already_processed = OldTimeLog.new(config, "lastMarkedTimeLog", known_tasks)
config.putsq "-------- Already processed practice times "
already_processed.print(config)
config.putsq "----- Fetching current practice times"
to_be_analyzed = NewTimeLog.new(config, known_tasks)
config.putsq "-------- Current practice times "
to_be_analyzed.print(config)
config.putsq "----- Summary Report"
to_be_analyzed.report!(config, already_processed).print(config)


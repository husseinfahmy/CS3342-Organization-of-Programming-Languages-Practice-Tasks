#gives us array for commit data
#log = ARGF.readlines

def print_task_commits(array, language)

    if language == "j"
        puts "------------------------------------------"
        puts "\t\tJAVASCRIPT"
        puts "------------------------------------------"

    elsif language == "r"
        puts "------------------------------------------"
        puts "\t\tRUBY"
        puts "------------------------------------------"
    elsif language == "h"
        puts "------------------------------------------"
        puts "\t\tHASKELL"
        puts "------------------------------------------"
    end

    array.each_with_index do |thing,index|
           
        if((index)%4 == 0)#fourth element is the commit message
            
            #tokenize the commit message
            words = array[index].split
            
            if words[1].start_with? 'j'#if javascript task
                #code
                print array[index+1], "\t"
                print array[index], "\n"
            end
        end
    end

end


#
timeCommits = []
i = 0


logString = %x(git log)
log = logString.split("\n")


log.each_with_index do |thing,index|

    next unless (log[index].start_with? 'Author: Hussein Fahmy')&&(log[index+3].start_with? '    time')
        timeCommits[i] = log[index-1]
        i += 1
        timeCommits[i] = log[index]
        i += 1
        timeCommits[i] = log[index+1]
        i += 1
        timeCommits[i] = log[index+3]
        index += 5
        i += 1
    end


timeCommits = timeCommits.reverse
#puts timeCommits[0] =========> Message
#puts timeCommits[1] =========> Date
#puts timeCommits[2] =========> Author
#puts timeCommits[3] =========> Commit code


if ARGV.size == 1
    if ARGV[0] != 'j' and ARGV[0] != 'r' and ARGV[0] != 'h' #if argument is not j,r, or n
        puts "Invalid Argument. Argument must be 'j', 'r', or 'h'."
    else    #else print the tasks for that language
        #call printing function
        print_task_commits(timeCommits, ARGV[0])
    end
elsif ARGV.size ==0 
    print_task_commits(timeCommits, 'j')
    print_task_commits(timeCommits, 'r')
    print_task_commits(timeCommits, 'h')

else
    puts "Only 1 argument is allowed!"
end
    





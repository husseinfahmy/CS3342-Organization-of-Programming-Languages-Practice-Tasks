#gives us array for commit data
#log = ARGF.readlines
timeCommits = []
i = 0

value = %x(git log)
puts value.kind_of?(Array)

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

#print log

timeCommits = timeCommits.reverse



######################################
############ ALL JS TASKS ############
######################################

puts "------------------------------------------"
puts "\t\tJAVASCRIPT"
puts "------------------------------------------"

timeCommits.each_with_index do |thing,index|
   
    if((index)%4 == 0)#fourth element is the commit message
        
        #tokenize the commit message
        words = timeCommits[index].split
        
        if words[1].start_with? 'j'#if javascript task
            #code
            print timeCommits[index], "\n"
        end
    end
end


######################################
########### ALL RUBY TASKS ###########
######################################

puts "------------------------------------------"
puts "\t\tRUBY"
puts "------------------------------------------"

timeCommits.each_with_index do |thing,index|
   
    if((index)%4 == 0)#fourth element is the commit message
        
        #tokenize the commit message
        words = timeCommits[index].split
        
        if words[1].start_with? 'r'#if Ruby task
            #code
            print timeCommits[index], "\n"
        end
    end
end

######################################
########## ALL HASKELL TASKS #########
######################################

puts "------------------------------------------"
puts "\t\tHASKELL"
puts "------------------------------------------"

timeCommits.each_with_index do |thing,index|
   
    if((index)%4 == 0)#fourth element is the commit message
        
        #tokenize the commit message
        words = timeCommits[index].split
        
        if words[1].start_with? 'h'#if haskell task
            #code
            print timeCommits[index], "\n"
        end
    end
end
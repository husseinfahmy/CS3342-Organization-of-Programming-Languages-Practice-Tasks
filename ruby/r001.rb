#gives us array for commit data
log = ARGF.readlines
timeCommits = []
i = 0



puts "-------------------------------------------------------------------------------------"


log.each_with_index do |thing,index|

    #print "element: ", index, thing



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

timeCommits.each_with_index do |thing,index|
	#puts timeCommits[index]
	

    if((index)%4 == 0)#fourth element is the commit message
        #prints the commit messages
        #puts timeCommits[index]
        #puts "\n\n\n\n"

        #tokenize the commit message
        words = timeCommits[index].split
        words.each_with_index do |word, sentenceIndex|
            if words[1].start_with? 'j'#if javascript task
                #code
                print timeCommits[index], "\n"
            end
            if words[1].start_with? 'r'#if ruby task
                #code
            end
            if words[1].start_with? 'h'#if haskell task
                #code
            end


        end
    end


	#if((index+1)%4 == 0)
	#	puts "\n\n\n\n\n"
	#end
end
#log.gsub! 'commit', '\ncommit'
#print the git log to make sure its right
#print log


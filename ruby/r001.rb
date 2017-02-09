#gives us array for commit data
log = ARGF.readlines
timeCommits = []
i = 0

log.each_with_index do |thing,index|
    next unless (log[index].start_with? 'Author: Hussein Fahmy')&&(log[index-1].start_with? 'Commit')
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

log.each_with_index do |thing,index|
	if thing != nil
		print "Element: ", index
		print timeCommits[index]
		puts "\n"

	end
	


	#if(index%4 == 0)
	#	puts "\n"
	#end
end
#log.gsub! 'commit', '\ncommit'
#print the git log to make sure its right
#print log


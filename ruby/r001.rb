#gives us array for commit data
log = ARGF.readlines
timeCommits = []

log.each_with_index do |thing,index|
    if(log[index]start_with?('Author: Hussein Fahmy'))
    	timeCommits.append(log[index-1])
    	timeCommits.append(log[index])
    	timeCommits.append(log[index+1])
    	timeCommits.append(log[index+2])
    end
end

print timeCommits

#log.gsub! 'commit', '\ncommit'
#print the git log to make sure its right
#print log
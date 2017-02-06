log = ARGF.readlines

log.gsub! 'commit', '\ncommit'
#print the git log to make sure its right
print inputArray
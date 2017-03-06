import System.Process
main = do
	let log = readProcess "git" ["log"] []
	let x = words log
	print x
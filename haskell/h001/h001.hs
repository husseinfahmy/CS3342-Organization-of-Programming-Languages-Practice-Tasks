import System.Process
main = do
	let log = readProcess "git" ["log"] []
	print log
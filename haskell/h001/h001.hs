import System.Process
main = do
	let log = readProcess "git" ["log"] []
	putStrLn log
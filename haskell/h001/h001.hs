import System.Process
main = do
	log = readProcess "ls" ["-a"] ""
	putStrLn log
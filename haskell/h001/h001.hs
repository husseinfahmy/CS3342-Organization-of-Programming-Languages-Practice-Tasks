import System.Process
import Data.List.Split



main = do
	log <- readProcess "git" ["log"] []
--	splitOn:: log '\n' log
	splitOn "l" "lolgldfdsfl"
--	print logList
	print log
	
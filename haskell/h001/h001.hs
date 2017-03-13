import System.Process
--import Data.List.Split


split :: String -> Char -> [String]
split "" _ = []
split xs c = let (ys, zs) = break (== c) xs
             in  if null zs then [ys] else ys : split (tail zs) c

main = do
	log <- readProcess "git" ["log"] []
--	splitOn:: log '\n' log
	logList <- show (split "HI \n hey" '\n')
	print logList
	var currentQ = 0;
	var i = 0;
	var correctCount = 0;
	var incorrectCount = 0;
	var marked = true;
	var prevQuestionResult;
	var historyQuestions = [];
	var historyAnswers = [];
	var historyResults = [];

	function onLoad(){
		//document.getElementById("description").innerHTML = examdatabase.description;

		document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount; 
	}

	function newQuestion(){
		if(marked == true){
			currentQ = Math.floor(Math.random() * (34 - 0 + 1)) + 0;
			document.getElementById("question").innerHTML = examdatabase.questions[currentQ].question;
			document.getElementById("answer").innerHTML = "";
			i = 0;
			marked = false;

		}else{
			window.alert("You must indicate whether your answer was correct or incorrect!");
		}
	}

	function getAnswer(){

		if(examdatabase.questions[currentQ].answer.length>1){
			
			if(Array.isArray(examdatabase.questions[currentQ].answer)){
				for (; i < examdatabase.questions[currentQ].answer.length; i++){
					document.getElementById("answer").innerHTML += "Answer " + (i+1) + ":<br>";
					document.getElementById("answer").innerHTML += examdatabase.questions[currentQ].answer[i] + "<br> <br>";	
				}
			}else{
				document.getElementById("answer").innerHTML += "Answer: "  + "<br>";
				document.getElementById("answer").innerHTML += examdatabase.questions[currentQ].answer + "<br> <br>";	
			}

		}
	}

	function correct(){
		if(marked==false){
			correctCount += 1;
			marked = true;
			document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount;
			prevQuestionResult = "correct";

			saveToHistory("Correct");
/*
			historyQuestions.push(examdatabase.questions[currentQ].question);
			historyAnswers.push(examdatabase.questions[currentQ].answer);
			historyResults.push("Correct!");
*/
		}
	}

	function incorrect(){
		if(marked==false){
			incorrectCount += 1;
			marked = true;
			document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount; 	
			prevQuestionResult = "incorrect";

			saveToHistory("Incorrect");
/*
			historyQuestions.push(examdatabase.questions[currentQ].question);
			historyAnswers.push(examdatabase.questions[currentQ].answer);
			historyResults.push("Correct!");
*/
		}
	}

	function undo(){
		if(prevQuestionResult=="correct"){
			correctCount--;
			marked = false;
			document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount;
			prevQuestionResult = "";
		}else if(prevQuestionResult=="incorrect"){
			incorrectCount--;
			marked = false;
			document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount;
			prevQuestionResult = "";
		}
	}

	function saveToHistory(resultString){
		historyQuestions.push(examdatabase.questions[currentQ].question);
		historyAnswers.push(examdatabase.questions[currentQ].answer);
		historyResults.push(resultString);
	}

	function showReport(){
		document.getElementById("reportDiv").innerHTML = "";
		for (var i = 0; i < historyQuestions.length; i++) {
			document.getElementById("reportDiv").innerHTML += historyQuestions[i] + "<br> <br>" + historyAnswers[i] + "<br> <br>" + historyResults[i] + "<br> <br>   ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  <br> <br>"
		}
	}

	function clearReport(){
		historyResults = [];
		historyQuestions = [];
		historyAnswers = [];
		document.getElementById("reportDiv").innerHTML = "";
	}
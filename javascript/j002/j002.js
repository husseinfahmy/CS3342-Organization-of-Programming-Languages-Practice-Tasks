
	var currentQ = 0;
	var i = 0;
	var correctCount = 0;
	var incorrectCount = 0;
	var nextQEligible = true;

	function onLoad(){
		document.getElementById("description").innerHTML = examdatabase.description;

		document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount; 
	}

	function newQuestion(){
		if(nextQEligible == true){
			currentQ = Math.floor(Math.random() * (34 - 0 + 1)) + 0;
			document.getElementById("question").innerHTML = examdatabase.questions[currentQ].question;
			document.getElementById("answer").innerHTML = "";
			i = 0;
			nextQEligible = false;
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
		correctCount += 1;
		nextQEligible = true;
		document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount; 
	}

	function incorrect(){
		incorrectCount += 1;
		nextQEligible = true;
		document.getElementById("correctAndIncorrect").innerHTML = "Correct: " + correctCount + " Incorrect: " + incorrectCount; 
	}

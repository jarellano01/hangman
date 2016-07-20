
	var chosenWordArray = [];
	var correctLettersGuessed = [];
	var incorrectLettersGuessed = [];
	var wordArray = ["headphones", "computer", "internet", "petroleum", "architect","engineer"];
	var tryCounter = 0;
	var gameOn = true; 
	var winsCounter = 0;
	var losesCounter =0;
	var storyBoardCntr = 1;
	var storyInterval;

// myFunction();

	function startTimer() {
	    storyInterval = window.setInterval(UpdateStory, 300);

	    function UpdateStory() {
	        $('#story-board').attr('src', "assets/images/frame_" + storyBoardCntr + ".png");
	        storyBoardCntr++; //increment data array id
	        if (storyBoardCntr == 6) {
	            clearInterval(storyInterval);
	            gameOn = true;
	        }
	        if (storyBoardCntr == 13) {
	            clearInterval(storyInterval);
	            gameOn = true;
	        }
	        if(storyBoardCntr == 24) {
	        	clearInterval(storyInterval);
	        	gameOn = true;
	        }
	        if(storyBoardCntr == 34){
	        	clearInterval(storyInterval);
	        	gameOn = true;
	        }
	        if(storyBoardCntr == 38){
	        	clearInterval(storyInterval);
	        	gameOn = true;
	        }
	        if(storyBoardCntr == 41){
	        	clearInterval(storyInterval);
	        	gameOn = true;
	        }
	        if(storyBoardCntr == 47){
	        	storyBoardCntr = 43;
	        }
	    }
	}


	function initializeGame()
	{
		clearInterval(storyInterval);
		document.getElementById("btn-reset").style.display = "none";
		correctLettersGuessed = [];
		incorrectLettersGuessed = [];
		tryCounter = 0;
		storyBoardCntr = 1;

		$('#story-board').attr('src', "assets/images/Initial_Frame.png");
		document.getElementById("validation-alert").innerHTML = "";

		var tempWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		chosenWordArray = tempWord.split("");

		UpdateLettersGuessed();
		UpdateShownWord();
		
		startTimer();
		gameOn = true;
	}
	document.onkeyup = function(event) {
		// Determines which exact key was selected. Make it lowercase
		if(gameOn)
		{
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			ProcessLetter(userGuess);
		}
		
	}

	function ProcessLetter(cLetter) {
		if(correctLettersGuessed.indexOf(cLetter.toLowerCase()) !== -1 || incorrectLettersGuessed.indexOf(cLetter.toLowerCase()) !== -1)
		{
			document.getElementById("validation-alert").innerHTML = "You chose that letter already. Choose a new letter!!!";
		}
		else if(chosenWordArray.indexOf(cLetter.toLowerCase()) == -1)
		{
			incorrectLettersGuessed.push(cLetter);
			document.getElementById("validation-alert").innerHTML = "";
			UpdateCounter();
		}
		else
		{
			correctLettersGuessed.push(cLetter)
			document.getElementById("validation-alert").innerHTML = "";
		}
		UpdateShownWord();
		UpdateLettersGuessed();
		
	}

	function UpdateShownWord() {
		var shownWord = "";	
		var curLetterCount = 0;

		for(i=0; i <chosenWordArray.length; i++)
		{
			var cLetter = chosenWordArray[i];
			if(correctLettersGuessed.indexOf(cLetter) == -1){
				shownWord += " _ ";
			}
			else
			{
				shownWord += " " + cLetter + " ";
			}
		}
		document.getElementById("shown-word").innerHTML = shownWord;
		if(shownWord.indexOf("_")==-1)
			{
				gameOn = false;
				winsCounter++;
				document.getElementById("cSaves").innerHTML = winsCounter;
				document.getElementById("validation-alert").innerHTML = "Congratulations, you saved Phil!!!";
				document.getElementById("btn-reset").style.display = "initial";
			}
	}
	function UpdateLettersGuessed()
	{
		var tempString = "";
		for(i = 0; i<incorrectLettersGuessed.length; i++)
		{
			tempString += incorrectLettersGuessed[i] + " ";

		}
		document.getElementById("letters-guessed").innerHTML = tempString;
		

	}

	function UpdateCounter()
	{
		tryCounter ++; 
		var tempInt = tryCounter % 2;
		if(tempInt == 0)
		{
			gameOn = false;
			startTimer();
		}
		if (tryCounter >= 12) {
			losesCounter++;
			document.getElementById("cKills").innerHTML = losesCounter;
			document.getElementById("validation-alert").innerHTML = "You lose!!!";
			document.getElementById("btn-reset").style.display = "initial";
		}

	}

	var chosenWordArray = [];
	var correctLettersGuessed = [];
	var incorrectLettersGuessed = [];
	var wordArray = ["headphones", "computer", "internet", "petroleum", "architect","engineer"];
	var tryCounter = 0;

	function initializeGame()
	{
		correctLettersGuessed = [];
		incorrectLettersGuessed = [];
		tryCounter = 0;
		var tempWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		chosenWordArray = tempWord.split("");
		UpdateLettersGuessed();
		UpdateShownWord();
	}
	document.onkeyup = function(event) {
		// Determines which exact key was selected. Make it lowercase
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		ProcessLetter(userGuess);
	}

	function ProcessLetter(cLetter) {
		if(correctLettersGuessed.indexOf(cLetter.toLowerCase()) !== -1 || incorrectLettersGuessed.indexOf(cLetter.toLowerCase()) !== -1)
		{
			document.getElementById("validation-alert").innerHTML = "You chose that letter already. Choose a new letter!!!";
		}
		else if(chosenWordArray.indexOf(cLetter.toLowerCase()) == -1)
		{
			incorrectLettersGuessed.push(cLetter);
			UpdateCounter();
			document.getElementById("validation-alert").innerHTML = "";
		}
		else
		{
			correctLettersGuessed.push(cLetter)
			document.getElementById("validation-alert").innerHTML = "";
		}
		UpdateShownWord();
		UpdateLettersGuessed();
		document.getElementById("letter-guessed").value = "";
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
				document.getElementById("validation-alert").innerHTML = "Congratulations, you saved Phil!!!";
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
		if (tryCounter >= 5) {
			document.getElementById("validation-alert").innerHTML = "You lose!!!";
			initializeGame();
		}

	}
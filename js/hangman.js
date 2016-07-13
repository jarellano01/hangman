// variables
var lettersGuessed = [];
var philsThoughs;
var tiesLeft = 3;
var wordList = ["headphones", "computer", "internet", "petroleum", "architect","engineer"];
var curWord;
var curShownWord;
var randomWordId;

// functions
function changePhilsThoughts() {
	document.getElementById("pThoughts").innerHTML = "Hello, thanks for helping me out. I've been so stressed at work lately and it would be nice to get at least one win today";
}
function AddLetterGuessed() {
	var value = document.getElementById("letterGuessed").value;

	if (lettersGuessed.indexOf(value)==-1) {
		PhilsThoughtsValueCheck(value);
		lettersGuessed.push(value);
		document.getElementById("pLettersGuessed").innerHTML = lettersGuessed;
		document.getElementById("validation-alert").innerHTML = "";
		ClearInput();
	}
	else
	{
		document.getElementById("validation-alert").innerHTML = "";
		document.getElementById("validation-alert").innerHTML = "You already chose that letter. Choose a new letter.";
		ClearInput();
	}
	
}
function ClearInput() {
	document.getElementById("letterGuessed").value = "";
	document.getElementById("letterGuessed").focus();
}
function PhilsThoughtsValueCheck(value)
{
	if(isNaN(value))
	{
		document.getElementById("pThoughts").innerHTML = "Good try but that isn't making me happier";
	}
	else
	{
		document.getElementById("pThoughts").innerHTML = "Are you trying to kill me? That's not even a letter."
	}
}

function returnKey()
{
	if(event.keyCode == 13)
	{
		AddLetterGuessed();
	}
}

function ResetGame()
{
	var curWord = wordList[Math.floor((Math.random() * wordList.length))];
	alert(curWord);
	InitShownWord(curWord);
}

function InitShownWord(curWord) {
	var wordArray = curWord.split("");
	console.log(wordArray);
	for(i = 0; i < wordArray.lenth; i++)
	{
		
	}
}

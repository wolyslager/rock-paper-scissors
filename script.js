let userValue;
let computerValue;
let battleResult; 
const userSelection = document.querySelector('.user-selection');
const computerSelection = document.querySelector('.computer-selection');
const playButton = document.querySelector('.play-button');
const textResult = document.querySelector('.text-result');

const rock = document.querySelector('.rock');
rock.addEventListener('click', (e) => {
	userSelection.src='img/fist.png';
	userValue = 'rock';
})

const paper = document.querySelector('.paper');
paper.addEventListener('click', (e) => {
	userSelection.src='img/hand.png';
	userValue = 'paper';
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', (e) => {
	userSelection.src='img/scissors.png';
	userValue = 'scissors';
})

const waiting = () => {
	textResult.innerHTML = '';
	computerSelection.src='img/waiting.png';
}

const assignComputerSelection = () => {
	let randomNum = Math.floor((Math.random()*3) + 1);
	switch(randomNum){
		case 1:
		  computerSelection.src = 'img/fist.png';
		  computerValue = 'rock';
		  break;
		case 2:
		  computerSelection.src = 'img/hand.png';
		  computerValue = 'paper';
		  break;
		case 3:
		  computerSelection.src = 'img/scissors.png';
		  computerValue = 'scissors';
		  break;
	}
}

const compareSelections = () => {
	switch(userValue){
		case 'rock':
		  return computerValue == 'scissors' ? 'Win' : 'Lose';
		case 'scissors':
	      return computerValue == 'paper' ? 'Win':  'Lose';
		case 'paper':
		  return computerValue == 'rock' ? 'Win' : 'Lose';
	 }
}

playButton.addEventListener('click', (e) => {
	if(!userValue){
		alert('please make a selection')
	} else {
		assignComputerSelection();
		userValue === computerValue ? battleResult = 'Draw' : battleResult = compareSelections();
		textResult.innerHTML = battleResult;
	}
	
})



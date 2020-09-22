const userSelection = document.querySelector('.user-selection');
const computerSelection = document.querySelector('.computer-selection');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playButton = document.querySelector('.play-button');
const textResult = document.querySelector('.text-result');
let userValue;
let computerValue;
let battleResult; 

rock.addEventListener('click', (e) => {
	userSelection.src='img/fist.png';
	userValue = 'rock';
})
paper.addEventListener('click', (e) => {
	userSelection.src='img/hand.png';
	userValue = 'paper';
})
scissors.addEventListener('click', (e) => {
	userSelection.src='img/scissors.png';
	userValue = 'scissors';
})

const assignComputerSelection = (randomNum) => {
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
		  if(computerValue == 'scissors'){
			  return 'Win'
		  } else {
			  return 'Lose'
		  }
		case 'scissors':
		  if(computerValue == 'paper'){
			  return 'Win'
		  } else {
			  return 'Lose'
		  }
		case 'paper':
		  if(computerValue == 'rock'){
			  return 'Win'
		  } else {
			  return 'Lose'
		  }
	 }
}

playButton.addEventListener('click', (e) => {
	let randomNum = Math.floor((Math.random()*3) + 1);
	assignComputerSelection(randomNum);
	
	userValue === computerValue ? battleResult = 'Draw' : battleResult = compareSelections();
	textResult.innerHTML = battleResult;
})



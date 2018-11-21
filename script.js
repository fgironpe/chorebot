let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById("start");
let currentlyPlaying = true;

const randomChoreDoorGenerator = () => {
	choreDoor = Math.floor(Math.random() * numClosedDoors);
	if(choreDoor == 0){
		openDoor1 = botDoorPath;
		openDoor3 = spaceDoorPath;
		openDoor2 = beachDoorPath;

	}else if(choreDoor == 1){
		openDoor2 = botDoorPath;
		openDoor3 = spaceDoorPath;
		openDoor1 = beachDoorPath;
	}else{
		openDoor3 = botDoorPath;
		openDoor2 = spaceDoorPath;
		openDoor1 = beachDoorPath;
	}
}

doorImage1.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage1)){
		doorImage1.src = openDoor1;
		playDoor(door1);
	}
	
}

doorImage2.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage2)){
		doorImage2.src = openDoor2;
		playDoor(door2);
	}	
}

doorImage3.onclick = () => {
	if(currentlyPlaying && !isClicked(doorImage3)){
		doorImage3.src = openDoor3;
		playDoor(door3);
	}
}

startButton.onclick = () => {
		if(!currentlyPlaying){
			startRound();
		}
}

const startRound = () => {
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = "Good Luck!";
	currentlyPlaying = true;
	randomChoreDoorGenerator();
}
 
const isBot = (door) => {
	if(door.src === botDoorPath){
		return true;
	}else {
		return false;
	}
}

const isClicked = (door) => {
	if(door.src === closedDoorPath){
		return false;
	}else {
		return true;
	}
}

const playDoor = (door) => {
	numClosedDoors--;
	if(numClosedDoors === 0){
		gameOver('win');
	}else if(isBot(door)){
		gameOver();
	}
}

const gameOver = (status) => {
	if(status === 'win'){
		startButton.innerHTML = "You win! Play Again?";
	}else{
		startButton.innerHTML = "Game Over! Play Again?";
	}
	currentlyPlaying = false;
}

randomChoreDoorGenerator();
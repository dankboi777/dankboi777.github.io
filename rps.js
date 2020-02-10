function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function aa(){
	rp = true;
	document.getElementById("player").innerHTML = "You: Rock";
}
function bb(){
	pp = true;
	document.getElementById("player").innerHTML = "You: Paper";
}
function cc(){
	sp = true;
	document.getElementById("player").innerHTML = "You: Scissors";
}


function check(){
	// possibilities rock
	if (rp == true && rc == true){
		document.getElementById("game").innerHTML = "It's a draw";
	}
	if (rp == true && pc == true){
		document.getElementById("game").innerHTML = "You lose";
	}
	if (rp == true && sc == true){
		document.getElementById("game").innerHTML = "You win";
	}

	// possibilities paper
	if (pp == true && rc == true){
		document.getElementById("game").innerHTML = "You win";
	}
	if (pp == true && pc == true){
		document.getElementById("game").innerHTML = "It's a draw";
	}
	if (pp == true && sc == true){
		document.getElementById("game").innerHTML = "You lose";
	}

	// possibilities scissors
	if (sp == true && rc == true){
		document.getElementById("game").innerHTML = "You lose";
	}
	if (sp == true && pc == true){
		document.getElementById("game").innerHTML = "You win";
	}
	if (sp == true && sc == true){
		document.getElementById("game").innerHTML = "It's a draw";
	}
}
function comp(){
	var a = getRandomInt(1, 3);
	if (a==1){
		rc = true;
		document.getElementById("para").innerHTML = "Computer: Rock";
	}
	if (a==2){
		pc = true;
		document.getElementById("para").innerHTML = "Computer: Paper";
	}
	if (a==3){
		sc = true;
		document.getElementById("para").innerHTML = "Computer: Scissors";
	}

}
function reset(){
	rp = false;
	pp = false;
	sp = false;
	rc = false;
	pc = false;
	sc = false;
}
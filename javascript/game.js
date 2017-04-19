

function setupGame() {

	var character = {
		name:"Obi-Wan",
		// - Health Points
		healthPoints: 100,
		// - Attack Power
		attackPower: 6, 
		// - Base Attack Power
		baseAttackPower: 6,
		// - Counter Attack Power
		counterAttackPower: 10
	}

	var $player = $('#player');
	$player.append(character.name);
	$player.append("<br>");
	$player.append(character.healthPoints);
}



$(document).ready(function(){

	console.log("Document Ready function");
	setupGame();
});
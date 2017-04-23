var playerSelected = false;
var enemySelected = false;
var playerHandle;
var $player;
var $enemy;
var characterHandles = ["finn", "rey", "poe", "kylo", "bb8"];
var enemyHandles = [];
var enemyHandle;
var currentEnemy;

	// Player: Rey
	var rey = {
		name:"Rey",
		shortName:"Rey",
		// - Health Points
		healthPoints: 100,
		// - Attack Power
		attackPower: 5, 
		// - Base Attack Power
		baseAttackPower: 5,
		// - Counter Attack Power
		counterAttackPower: 10,
		//image url
		image: "images/rey.png"
	}
	// Player: Kylo
	var kylo = {
		name:"Kylo Ren",
		shortName:"Kylo",
		// - Health Points
		healthPoints: 100,
		// - Attack Power
		attackPower: 5, 
		// - Base Attack Power
		baseAttackPower: 5,
		// - Counter Attack Power
		counterAttackPower: 10,
		//image url
		image: "images/kylo.png"
	}
	// Player: Finn
	var rey = {
		name:"Finn",
		shortName:"Finn",
		// - Health Points
		healthPoints: 100,
		// - Attack Power
		attackPower: 5, 
		// - Base Attack Power
		baseAttackPower: 5,
		// - Counter Attack Power
		counterAttackPower: 10,
		//image url
		image: "images/Finn.png"
	}
	// Player: Poe
	var kylo = {
		name:"Poe Dameron",
		shortName:"Poe",
		// - Health Points
		healthPoints: 100,
		// - Attack Power
		attackPower: 5, 
		// - Base Attack Power
		baseAttackPower: 5,
		// - Counter Attack Power
		counterAttackPower: 10,
		//image url
		image: "images/poe.png"
	}
		// Player: BB8
	var rey = {
		name:"BB-8",
		shortName:"BB8",
		// - Health Points
		healthPoints: 100,
		// - Attack Power
		attackPower: 5, 
		// - Base Attack Power
		baseAttackPower: 5,
		// - Counter Attack Power
		counterAttackPower: 10,
		//image url
		image: "images/bb8.png"
	}


var characters = [];

$(document).ready(function(){

	console.log("Document Ready function");
	//setupGame();

});

	// $(".enemy").click(function(){
	//  	alert("enemy clicked");
	//  });

	 $(".character").click(function(){
		console.log("character on click");


	 	if (!playerSelected){
	 		//user is selecting a player
	 		$player = $(this);
	 		console.log("player selected: " + $player.attr("data-name"));
	 		playerHandle = $player.attr("data-name");
	 		//update character with player style
	 		$player.addClass("player");


	 		//update enemies and move them
	 		for(var i =0; i<characterHandles.length; i ++ ){
	 			if(characterHandles[i] !== playerHandle){
	 				var charClass = "." + characterHandles[i];
	 				enemyHandles.push(charClass);
	 				var $newEnemy = $(charClass);

	 				//remove from charactes section
	 				console.log("detaching: " + charClass);
	 				$newEnemy.detach();
	 				// remove character class
//	 				$newEnemy.removeClass("character");

	 				// add enemy class and formating;
	 				$newEnemy.addClass("enemy");
	
	 				//add to enemies section
	 				$("#enemy").append($newEnemy);
	 			}

	 		}

	 		//set playerSelected flag
	 		playerSelected = true;

	 	}

	 	else if ($(this).hasClass("enemy")) {

	 		if(!enemySelected){
	 		//create a reference to the enemy
	 		$enemy = $(this);
	 		//store enemy name...
	 		enemyHandle = $enemy.attr("data-name");
			console.log("enemy detected! : " + enemyHandle);
			
			// remove it from enemies area
			$enemy.detach();

			//add enemy to defender's area
			$("#defender").append($enemy);

			//set boolean to true to allow attackl
			enemySelected = true;
			}
			else {
				alert("you've already selected an enemy; please press the attack button to start your attack!");
			}


	 	}

	 });

	 $(".attack").click(function(){

	  		if(!playerSelected && !enemySelected) alert("need to select a player and enemy!");
	  		else if( playerSelected && !enemySelected) alert("need to select an enemy!");

	  		else if( !playerSelected && enemySelected) alert("something's wrong....");
	  		else {
	  			//we're all good to attack...
	  			console.log("ATTACk!....");
	  			attack();
	  		}
	  	
	 });

function attack(){
	console.log("attack function");
	console.log("player is: ");
	console.log($player.attr("data-name"));

	console.log("enemy is: ");
	console.log($enemy.attr("data-name"));



// alert("enemy healthPoints: " + $enemy.healthpoints);
	
}








var playerSelected = false;
var enemySelected = false;
var playerHandle;
var $player;
var $enemy;
var characterHandles = ["finn", "rey", "poe", "kylo", "bb8"];
var enemyHandles = [];
var currentEnemy;
function setupGame() {



}



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
	 				var $newEnemy = $(charClass);

	 				//remove from charactes section
	 				console.log("removing: " + charClass);
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
	 		//create a reference to the enemy
	 		$enemy = $(this);
			console.log("enemy detected! : " + $enemy.attr("data-name"));
			
			// remove it from enemies area
			$enemy.detach();

			//add enemy to defender's area
			$("#defender").append($enemy);

			//set boolean to true to allow attackl
			enemySelected = true;



	 	}

	 });

	 $(".attack").click(function(){
	  	if (playerSelected && enemySelected){
	  		alert("attack!");
	  	}
	  	else {
	  		if(!playerSelected && !enemySelected) alert("need to select a player and enemy!");
	  		else if( playerSelected && !enemySelected) {
	  			alert("need to select an enemy!");
	  			console.log("player: " + $player.attr("data-name"));
	  		
	  		}


	  		else if( !playerSelected && enemySelected) alert("something's wrong....");
	  		else {
	  			//we're all good to attack...
	  			alert("we're all good to attack...");
	  		}
	  	}
	 });








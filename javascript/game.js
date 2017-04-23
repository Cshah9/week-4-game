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

	 $(".character").click(function(){
		console.log("character on click");
		console.log();


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
	 				$newEnemy.remove();
	 				// remove character class
	 				$newEnemy.removeClass("character");

	 				// add enemy class and formating;
	 				$newEnemy.addClass("enemy");

	 				//add to enemies section
	 				$("#enemy").append($newEnemy);
	 			}

	 		}

	 		//set playerSelected flag
	 		playerSelected = true;

	 	}

	 });

	 $(".attack").click(function(){
	  	if (playerSelected && enemySelected){
	  		alert("attack!");
	  	}
	  	else {
	  		if(!playerSelected && !enemySelected) alert("need to select a player and enemy!");
	  		else if( playerSelected && !enemySelected) alert("need to select an enemy!");
	  		else if( !playerSelected && enemySelected) alert("something's wrong....");
	  		else {
	  			//we're all good to attack...
	  			alert("we're all good to attack...");
	  		}
	  	}
	 });

	 // $(".enemy").click(function(){
	 // 	alert("enemy clicked");
	 // });

});






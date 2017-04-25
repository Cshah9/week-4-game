var playerSelected = false;
var enemySelected = false;
var playerHandle;
var $player;
var $enemy;
var $defeatedEnemies = [];
var characterHandles = ["finn", "rey", "poe", "kylo", "bb8"];
var enemyHandles = [];
var enemyHandle;
var currentEnemy;
var currentPlayer;
var losses=0;
var wins=0;

var characters = [
	// Player: Rey
	{
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
	},
	// Player: Kylo
	{
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
	},
	// Player: Finn
	{
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
	},
	// Player: Poe
	{
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
	},
		// Player: BB8
	{
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
	];



$(document).ready(function(){

	console.log("Document Ready function");
	//setupGame();

});

//uses character short Name to find and return the character object from characters array
function getCharacter(sName){

	console.log("getCharacter - " + sName);
	//console.log(characters.find(function(c){return c.shortName.toLowerCase()===sName}));
	return characters.find(function(c){return c.shortName.toLowerCase()===sName});
};
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
	 		//set player object
	 		currentPlayer = getCharacter(playerHandle);



	 		//update enemies and move them
	 		for(var i =0; i<characterHandles.length; i ++ ){
	 			if(characterHandles[i] !== playerHandle){
	 				var charClass = "." + characterHandles[i];
	 				// enemyHandles.push(charClass);
	 				enemyHandles.push(characterHandles[i])
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
	 		console.log(enemyHandles.toString());
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
			//store reference to enemy
			currentEnemy = getCharacter(enemyHandle);
			
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
	console.log(currentPlayer.name + " vs " + currentEnemy.name);

		// 	healthPoints: 100,
		// // - Attack Power
		// attackPower: 5, 
		// // - Base Attack Power
		// baseAttackPower: 5,
		// // - Counter Attack Power
		// counterAttackPower: 10,

	//player attacks enemy; enemy HP reduced
	currentEnemy.healthPoints -= currentPlayer.attackPower;
	//player increase attach power by base attach power
	currentPlayer.attackPower+= currentPlayer.baseAttackPower;
	//enemy counter attacks: player HP reduced
	currentPlayer.healthPoints -= currentEnemy.counterAttackPower;

	console.log (currentPlayer);
	console.log (currentEnemy);

	//don't print display negative HPs
	if(currentPlayer.healthPoints<0) currentPlayer.healthPoints = 0;
	if(currentEnemy.healthPoints<0) currentEnemy.healthPoints = 0;

	//update character HPs:
	$player.children($(".healthPoints")).html(currentPlayer.healthPoints);
	$enemy.children($(".healthPoints")).html(currentEnemy.healthPoints);

	//check HPs and 
	if(currentPlayer.healthPoints==0) {
		//player losses
		alert("you lose!");
		losses++;
		resetGame();

	}

	else if(currentEnemy.healthPoints == 0 ) {
		//enemy defeated
		alert("enemy defeated");

		//remove from screen
		$("#defender").html("");
		enemySelected = false;
		$defeatedEnemies.push($enemy);
		// $enemy.removeClass("enemy");
		//remove handle
		enemyHandles.splice(enemyHandles.indexOf(enemyHandle), 1);

		console.log(enemyHandles.toString());

		//check if all enemies gone - then user wins
		if(enemyHandles.length == 0) {
			alert("you win!");
			wins++;
			resetGame();

		}
			else {
			//if not, alert player to select a new enemy
			alert("choose a new enemy!");
		}
	}

	
	

}

//resets the game after a win/loss
function resetGame(){
	alert("do reset function");
	//update wins and losses

	$("#wins").html(wins);
	$("#losses").html(losses);

// //reset characters
	//$player.removeClass("player");
	//  ?? $enemy.removeClass("enemy");
	// $("#all-characters").append($player);
	// console.log($player);
	// console.log("$defeatedEnemies.length " + $defeatedEnemies.length)
	// for(var e = 0; e<$defeatedEnemies.length; e++) {
	// 	console.log($defeatedEnemies[e]);
	// 	$("#all-characters").append($defeatedEnemies[e]);

	// }

characters =	[




	// Player: Rey
	{
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
	},
	// Player: Kylo
	{
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
	},
	// Player: Finn
	{
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
	},
	// Player: Poe
	{
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
	},
		// Player: BB8
	{
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
	];

	// //replace character html
	$(".all-characters").html('<div class="col-lg-2 col-md-2 col-sm-6 finn character" data-name="finn"><span class="name">Finn</span><br><img src="images/finn.png"><br><span class="healthpoints">100</span></div><div class="col-lg-2 col-md-2 col-sm-6 rey character" data-name="rey"><span class="name">Rey</span><br><img src="images/rey.png"><br><span class="healthpoints">100</span></div><div class="col-lg-2 col-md-2 col-sm-6 poe character" data-name="poe"><span class="name">Poe</span><br><img src="images/poe.png"><br><span class="healthpoints">100</span></div><div class="col-lg-2 col-md-2 col-sm-6 kylo character" data-name="kylo"><span class="name">Kylo Ren</span><br><img src="images/kylo.png"><br><span class="healthpoints">50</span></div><div class="col-lg-2 col-md-2 col-sm-6 bb8 character" data-name="bb8"><span class="name">BB-8</span><br><img src="images/bb8.png"><br><span class="healthpoints">50</span></div><span id="player"></span>');
	$("#defender").html("");
	$("#enemy").html("");


	// //set all vars to initial values;
	 playerSelected = false;
	 enemySelected = false;
	 playerHandle = "";
	 $player = "";
	 $enemy = "";
	 $defeatedEnemies = [];
	 characterHandles = ["finn", "rey", "poe", "kylo", "bb8"];
	 enemyHandles = [];
	 enemyHandle = "";
	 currentEnemy = "";
	 currentPlayer = "";

}












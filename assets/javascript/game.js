var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;
gameOver = false;

var cloud = {
  name: "Cloud",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var lightning = {
  name: "Lightning",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var sephiroth = {
  name: "Sephiroth",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var tidus = {
  name: "Tidus",
  health: 180,
  baseAttack: 25,
  attack: 25
};

function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}

function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}

function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}

function resetGame() {

  $("#cloud-character").children(".health").html(cloud.health);
  $("#lightning-character").children(".health").html(lightning.health);
  $("#sephiroth-character").children(".health").html(sephiroth.health);
  $("#tidus-character").children(".health").html(tidus.health);

  $(".character-image").removeClass("chosen-character enemy-character defender-character").addClass("available-character");
  var available = $(".available-character").show();
  $("#characters-available").html(available);

  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}

$(document).ready(function() {
  $("#restart").hide();

  $("#cloud-character").on("click", function () {
    console.log("Cloud is selected");

    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(cloud);
      characterSelected = true;

      $("#cloud-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {

      if($("#cloud-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(cloud);
        defenderSelected = true;

        $("#cloud-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#lightning-character").on("click", function () {
    console.log("Lightning is selected");

    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(lightning);
      characterSelected = true;

      $("#lightning-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {

      if($("#lightning-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(lightning);
        defenderSelected = true;

        $("#lightning-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#sephiroth-character").on("click", function () {
    console.log("Sephiroth is selected");

 
    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(sephiroth);
      characterSelected = true;

      $("#sephiroth-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {

      if($("#sephiroth-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(sephiroth);
        defenderSelected = true;

        $("#sephiroth-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#tidus-character").on("click", function () {
    console.log("Tidus is selected");

    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(tidus);
      characterSelected = true;

      $("#tidus-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {

      if($("#tidus-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(tidus);
        defenderSelected = true;

        $("#tidus-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });

  $("#attack").on("click", function() {
    console.log("Attack selected");

    if (characterSelected && defenderSelected && !gameOver) {

      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

      character.attack = character.attack + character.baseAttack;

      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
          $("#restart").show();
        }
      } else {

        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>You have won the game!!!</p><p>Play again?</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

  });

  $("#restart").on("click", function() {
    console.log("Restart selected");

    resetGame();
  });

}); 

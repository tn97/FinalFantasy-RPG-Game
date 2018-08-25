var gameRunning = false;
var playerChar = false;
var totalTime = 15; //change back after game done
var intervalId;
var attackPower;
var counterPower;
var health;
//have the 15 seconds in the instructions count down

function instructionFade() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    totalTime--;
    console.log(totalTime);

    if (totalTime === 0) {
        $(".instructions-container").css("display", "none");
        clearInterval(intervalId);
        $(".btn").css("display", "block");
    }
}

function attack() {
    var $playerHealth = $(".player").children(".progress-player");
    var $comHealth = $(".enemy").children(".progress-COM");
}

if (!playerChar) {
    characterChoose();
}

function characterChoose() {
    console.log("execute charc");
    for (var i = 0; i < 1; i++) {
        console.log(i)
        $(document).click(function (event) {
            ($(event.target).hasClass("class-card"))
            $(event.target).appendTo($(".player"))
        })
    }
    playerChar = true;
}



var colorArray = ["red", "green", "blue", "yellow"];
var userClickedPattern=[];
var gamePattern=[];

var Level = 0

start =false

 // starting the Game by any key pressed

 $(document).keypress(function () { 
    if (!start){
        $("#level-title").text("Level " + Level);
        nextSequence();
        start= true;
    }
});



  // clicking on color button
  $(".btn").click(function(){

    // push the user color to the array and check for the result
    userChosenColour(this.id);  
    console.log("userClickedPattern",userClickedPattern)

    ButtonSound(this.id)
    animatePress(this.id)   

}); 

    

function nextSequence() {
    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern=[];
    Level++;
    $("#level-title").text("Level " + Level);

    // Get the random sequence with in limit
    const random = Math.floor(Math.random() * colorArray.length);
    var getRandomColor =colorArray[random]
      // store the next sequence pattern for into an array
    gamePattern.push(getRandomColor)
    console.log("gamePattern",gamePattern)
    // do the animation with sound effects
    ButtonAnimationWithSound(getRandomColor)
    
    // setTimeout(nextSequence, 5000);
}


function Animatiom(someElement) {
    $("#"+someElement).delay(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function ButtonAnimationWithSound(key){

    switch(key){
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            Animatiom(key);
        break
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            Animatiom(key);

        break
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            Animatiom(key);

        break
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            Animatiom(key);

        break

    }

}

function ButtonSound(key){

    switch(key){
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
        break
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();

        break
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();

        break
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
        break

    }

}

function animatePress(element){
    $("#"+element).addClass("pressed");
    setTimeout(() => {
        $("#"+element).removeClass("pressed");
    }, 100);
}

function wrongAnswerAnimation(){

    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
}


function userChosenColour(element){
    userClickedPattern.push(element);
    var lastIndex = userClickedPattern.length - 1
    checkAnswer(lastIndex);
} ;

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel


function checkAnswer(lastIndex){
    if (userClickedPattern[lastIndex] == gamePattern[lastIndex]){
        console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    }
    else{
        console.log("wrong");
        var audio = new Audio("sounds/wrong.mp3");
            audio.play();
        wrongAnswerAnimation()
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
  }



function startOver(){
    start = false;
    Level = 0;
    gamePattern=[];



  }




  


   



    









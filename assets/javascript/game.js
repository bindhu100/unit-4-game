


$(document).ready(function(){

    // generate random number
    var random = Math.floor(Math.random() * 101+19)

    // display random number
    $("#randomNUmber").text(random);

    // // generate random value to each crystal
    var cry1 =Math.floor(Math.random() *11+1)
    var cry2 =Math.floor(Math.random() *11+1)
    var cry3 =Math.floor(Math.random() *11+1)
    var cry4 =Math.floor(Math.random() *11+1)

    //variable for updating result in: win, losses, totalScore
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // to display win and losses score
    $("#wins").text(wins );
    $("#losses").text(losses);

    // restart game
    function reset(){
        // reset random number
        random = Math.floor(Math.random() * 101+19);

        // display reset random number
        $("#randomNUmber").text(random);

        // reset value of each crystal
        cry1 =Math.floor(Math.random() *11+1);
        cry2 =Math.floor(Math.random() *11+1);
        cry3 =Math.floor(Math.random() *11+1);
        cry4 =Math.floor(Math.random() *11+1);

        // reset users total score
        userScore = 0;
        $("#totalScore").text(userScore);

    }

    // dispaly how many times wins
    function winner(){
        wins++;
      $("#wins").text(wins);
      $(".popmessage").text("You Won!!!")
      reset()
    }

     // dispaly how many times losess
     function loser (){
        losses++;
        $("#losses").text(losses);
        $(".popmessage").text("You Lost!!!")
        reset()
     }

    //  on click each crystal
    $(".green").on("click", function(){
        userScore = userScore + cry1;
        $("#totalScore").text(userScore);
        
        // win/loss
        if(userScore===random){
            winner();
        }
        else if(userScore > random){
            loser();
        }
    })


    $(".pink").on("click", function(){
        userScore = userScore + cry2;
        $("#totalScore").text(userScore);
        
        // win/loss
        if(userScore===random){
            winner();
        }
        else if(userScore > random){
            loser();
        }
    })


    $(".yello").on("click", function(){
        userScore = userScore + cry3;
        $("#totalScore").text(userScore);
        
        // win/loss
        if(userScore===random){
            winner();
        }
        else if(userScore > random){
            loser();
        }
    })


    $(".heart").on("click", function(){
        userScore = userScore + cry4;
        $("#totalScore").text(userScore);
        
        // win/loss
        if(userScore===random){
            winner();
        }
        else if(userScore > random){
            loser();
        }
    })



})




// 88888888888888888888888888888888888888888888888
// 
// var randomResult;
// var lost;
// var win;
// random result
// randomResult = Math.floor(Math.random() *101) +19;
// $("#randomResult").html("Random Result: " +randomResult);

// game with 4 crystal  and random number
// for(var i = 0; i < 4; i++){
    // each crystal needs to have a random hidden value between 1 - 12.
    // var random =Math.floor(Math.random() *11) +1;
    

//     var crystal = $("<div>");
//     crystal.attr({"class":"crystal", "data-random":random});

//     $(".crystals").append(crystal);

   
// }
// Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

// $(".crystal").on("click", function(){
//    var num = parseInt ($(this).attr("data-random"));

//    var result =num+5;
//    console.log(num, )
// })  


// game with 4 crystal  and random number
// each crystal needs to have a random hidden value between 1 - 12.
// new random number should generate every single time user "win" or "lost"
// every time user "win" or "lost" a new random number should generate to those 4 crystals
// when click any crystal it should be add to previous score
// until it same with the random number
// if it is greater than random number , we decrement the lost counter//then restart the game
// if it is same , then increment win

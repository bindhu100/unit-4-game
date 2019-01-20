
$(document).ready(function(){

    // generate random number
    var random = Math.floor(Math.random() * 101)+19;

    // display random number
    $("#randomNUmber").text(random);

    // // generate random value to each crystal
    var cry1 =Math.floor(Math.random() *11)+1;
    var cry2 =Math.floor(Math.random() *11)+1;
    var cry3 =Math.floor(Math.random() *11)+1;
    var cry4 =Math.floor(Math.random() *11)+1;

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
        random = Math.floor(Math.random() * 101)+19;

        // display reset random number
        $("#randomNUmber").text(random);

        // reset value of each crystal
        cry1 =Math.floor(Math.random() *11)+1;
        cry2 =Math.floor(Math.random() *11)+1;
        cry3 =Math.floor(Math.random() *11)+1;
        cry4 =Math.floor(Math.random() *11)+1;

        // reset users total score
        userScore = 0;
        $("#totalScore").text(userScore);

    }


    // dispaly how many times wins
    function winner(){
        wins++;
      $("#wins").text(wins);
    $(".popmessage").text("You Won!!!")


    // set time out for "You Won!!!" message
    var fade_out = function() {
    $(".popmessage").empty();
    }
  
    setTimeout(fade_out, 4000);
      reset()
    }

     // dispaly how many times losess
     function loser (){
        losses++;
        $("#losses").text(losses);
        $(".popmessage1").text("You Lost!!!")

        // set time out for "You Lost!!!" message
        var fade_out = function() {
            $(".popmessage1").empty();
          }
          
          setTimeout(fade_out, 4000);
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





 var imgArray = new Array();
 imgArray[0] = new Image();
 imgArray[0].src = "css/images/dice1.png"

 imgArray[1] = new Image();
 imgArray[1].src = "css/images/dice2.png"

 imgArray[2] = new Image();
 imgArray[2].src = "css/images/dice3.png"

 imgArray[3] = new Image();
 imgArray[3].src = "css/images/dice4.png"

 imgArray[4] = new Image();
 imgArray[4].src = "css/images/dice5.png"

 imgArray[5] = new Image();
 imgArray[5].src = "css/images/dice6.png"

 var score_player1 = 0;
 var score_player2 = 0;
 var stay = false;
 var endGame = false;

//*******************  Function for player rolling  *****************//

 function stayChange(){
   stay = true;
 }

//******  Player 1  *****//
 function rollp1(){
   if(endGame)
     return;
   if(stay)
     return;
     
   var scoreOnClick = 0;
   scoreOnClick += Math.floor(Math.random() * 6) + 1;
   imageChange01(scoreOnClick);
   var scorePlayerCurrent = document.getElementById("scorep1_current");
   scorePlayerCurrent.innerHTML = "YOU ROLLED: " + scoreOnClick;

   if(scoreOnClick === 1){
     var scoreText = document.getElementById("scorep1");
     scoreText.innerHTML = "YOU LOST!";
     var scoreText1 = document.getElementById("scorep2");
     scoreText1.innerHTML = "YOU WON!";
     gameReset();
   }
    else{
     score_player1 += scoreOnClick;
     var scoreText = document.getElementById("scorep1");
     scoreText.innerHTML = "SCORE: " + score_player1;
   }
 }



//******  Player 2 ******//
 function rollp2(){
   if(endGame)
     return;
   if(!stay)
     return;

   var scoreOnClick = 0;
   scoreOnClick += Math.floor(Math.random() * 6) + 1;
   imageChange02(scoreOnClick);
   var scorePlayerCurrent = document.getElementById("scorep2_current");
   scorePlayerCurrent.innerHTML = "YOU ROLLED: " + scoreOnClick;

   if(scoreOnClick === 1){
     var scoreText = document.getElementById("scorep2");
     scoreText.innerHTML = "YOU LOST!";
     var scoreText1 = document.getElementById("scorep1");
     scoreText1.innerHTML = "YOU WON!";
     gameReset();
   }
    else{
     score_player2 += scoreOnClick;
     var scoreText = document.getElementById("scorep2");
     scoreText.innerHTML = "SCORE: " + score_player2;
     if(stay)
       if(score_player2 > score_player1)
        {
          var scoreText = document.getElementById("scorep2");
          scoreText.innerHTML = "YOU WON!";
          var scoreText = document.getElementById("scorep1");
          scoreText.innerHTML = "YOU LOST!";
          gameReset();
        }
   }
 }
//********************************************************************//

//*****************************  Game Logic***************************//
 function gameReset(){
   score_player1 = 0;
   score_player2 = 0;
   endGame = true;
 }

function imageChange01(index){
  console.log(index);
  var img = document.getElementById("rollImg1");
  img.src = imgArray[index-1].src;
}

function imageChange02(index){
  console.log(index);
  var img = document.getElementById("rollImg2");
  img.src = imgArray[index-1].src;
}
//*********************************************************************//

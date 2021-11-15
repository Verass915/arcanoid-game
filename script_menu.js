var runGame = function(){
    document.getElementById("newGame").style.display = "none";
    document.getElementById("head").style.display = "none";
    
document.getElementById("dev").style.display = "none";     
document.getElementById("how").style.display = "none";  
    document.getElementById("main").style.display = "block";
    document.getElementById("btn").style.display = "none";
    playerReset();
    updateScore();
    update();
  };
 var showdev = function(){
   document.getElementById("head").style.display = "none";
   document.getElementById("btn").style.display = "none";
   document.getElementById("newGame").style.display = "none";
   document.getElementById("dev").style.display = "block";
   document.getElementById("how").style.display = "block";
   document.getElementById("backBtn").style.display = "block";
 };
  
var goBack = function(){
  document.getElementById("backBtn").style.display = "none";
  document.getElementById("dev").style.display = "none";
  document.getElementById("how").style.display = "none";
  document.getElementById("head").style.display = "block";
  document.getElementById("newGame").style.display = "block";
  document.getElementById("btn").style.display = "block";
};
var randomNumber1 = Math.floor (Math.random() * 6 ) +1 //1-6
console.log(randomNumber1)

var RandomDiceImage = "dice" + randomNumber1 + ".png"; //get random dice1.png - dice6.png

var RandomImageSource = "images/" + RandomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImageSource);


var randomNumber2 = Math.floor (Math.random() * 6 ) +1 //1-6
console.log(randomNumber2)


var RandomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 WINS"
}
else if (randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML= "Player 2 WINS"}

else

document.querySelector("h1").innerHTML= "D R A W"




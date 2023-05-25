var dice1 = 0;
var dice2 = 0;
var diceImg1 = "";
var diceImg2 = "";
var winner = "";

dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;

diceImg1 = "images/dice" + dice1 + ".png";
diceImg2 = "images/dice" + dice2 + ".png";

document.querySelector(".img1").setAttribute("src", diceImg1);
document.querySelector(".img2").setAttribute("src", diceImg2);

if (dice1 > dice2) {
    winner = "🚩Player 1 Wins!";
}
if (dice2 > dice1) {
    winner = "Player 2 Wins!🚩";
}
if (dice1 === dice2) {
    winner = "It's a draw.";
}
document.querySelector("h1").textContent = winner;


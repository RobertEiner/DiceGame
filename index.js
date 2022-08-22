
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
    var randomNumber1 = Math.floor((Math.random() * 6));
    var randomNumber2 = Math.floor((Math.random() * 6));
    
    var arrayOfImages = ["images/dice1.png",
                        "images/dice2.png",
                        "images/dice3.png",
                        "images/dice4.png",
                        "images/dice5.png",
                        "images/dice6.png"];
    
    
    var newNumber1 = arrayOfImages[randomNumber1];
    var newNumber2 = arrayOfImages[randomNumber2];
    
                    
    document.querySelector(".playerOneDice").setAttribute("src", newNumber1);
    document.querySelector(".playerTwoDice").setAttribute("src", newNumber2);
    
    decideWinner(randomNumber1, randomNumber2);
}

function decideWinner(randomNumber1, randomNumber2) {

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "<p>🚩Player 1 wins, congratulations!</p>";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "<p>Player 2 wins, congratulations!🚩</p>";
    } else {
        document.querySelector("h1").innerHTML = "<p>It's a draw, play again!</p>";
    }

}





//-----------Alternative solution

/*var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".playerOneDice").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".playerTwoDice").setAttribute("src", "images/dice" + randomNumber2 + ".png");*/





















































/*var arrayOfImages = [".images/dice1.png",
                    ".images/dice2.png",
                    ".images/dice3.png",
                    ".images/dice4.png",
                    ".images/dice5.png",
                    ".images/dice6.png"];*/

/*arrayOfImages[0] = new Image();
arrayOfImages[0].src = ".images/dice1.png";

arrayOfImages[1] = new Image();
arrayOfImages[1].src = ".images/dice2.png";*/

/*arrayOfImages.push("images/dice1.png");
arrayOfImages.push("images/dice2.png");
arrayOfImages.push("images/dice3.png");
arrayOfImages.push("images/dice4.png");
arrayOfImages.push("images/dice5.png");
arrayOfImages.push("images/dice6.png");
var randomImage = new Image();
randomImage = arrayOfImages[randomNumber1];*/
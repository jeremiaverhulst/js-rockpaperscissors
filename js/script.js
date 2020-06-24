let userChoice;
let compChoice;

document.getElementById("rock").addEventListener('click', function(){
    userChoice = this.value;
    console.log(userChoice);
});

document.getElementById("paper").addEventListener('click', function(){
    userChoice = this.value;
    console.log(userChoice);
});

document.getElementById("scissors").addEventListener('click', function(){
    userChoice = this.value;
    console.log(userChoice);
});

let choices = ['rock', 'paper', 'scissors'];
document.getElementById("startGame").addEventListener('click', function(){
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice);
    compareChoices();
    document.querySelector("h4").style.display = "block";
});

function compareChoices() {
    let userChoiceHand = document.getElementById("userChoiceHand");
    let compChoiceHand = document.getElementById("compChoiceHand");
    let userCounter = 0;
    let compCounter = 0;
    let userScore = document.getElementById("userScore");
    let compScore = document.getElementById("compScore");
    let result = document.getElementById("result");

    if (userChoice === compChoice) {
        userChoiceHand.innerText = userChoice;
        compChoiceHand.innerText = compChoice;
        result.innerText = "Ooh, it's a tie!";
        userCounter += 0;
        compCounter += 0;
        userScore.innerText = userCounter;
        compScore.innerText = compCounter;
    } else if (userChoice === choices[0]) {
        if (compChoice === choices[2]) {
            userCounter += 1;
            userScore.innerText = userCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "You win this round!";
        } else if (compChoice === choices[1]) {
            compCounter += 1;
            compScore.innerText = compCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "The computer wins this round.";
        }
    } else if (userChoice === choices[2]) {
        if (compChoice === choices[0]) {
            compCounter += 1;
            compScore.innerText = compCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "The computer wins this round.";
        } else if (compChoice === choices[1]) {
            userCounter += 1;
            userScore.innerText = userCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "You win this round!";
        }
    } else if (userChoice === choices[1]) {
        if (compChoice === choices[0]) {
            userCounter += 1;
            userScore.innerText = userCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "You win this round!";
        } else if (compChoice === choices[2]) {
            compCounter += 1;
            compScore.innerText = compCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "The computer wins this round.";
        }
    }
}

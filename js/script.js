let userChoice;
let compChoice;
let userCounter = 0;
let compCounter = 0;
let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");

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
    document.getElementById("playerChoice").style.display = "none";
    document.getElementById("gameAnimation").style.display = "block";
    document.getElementById("startGame").style.display = "none";
    document.getElementById("playAgain").style.display = "none";
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice);
    compareChoices();
    setTimeout(function(){
        document.querySelector("h4").style.display = "block";
        document.getElementById("playAgain").style.display = "inline-block";
        document.getElementById("startOver").style.display = "inline-block";
    }, 1000);
    setTimeout(function(){
        document.getElementById("userFist").setAttribute('src', "img/"+userChoice+".svg");
        document.getElementById("compFist").setAttribute('src', "img/"+compChoice+".svg");
    }, 900);
});

function compareChoices() {
    let userChoiceHand = document.getElementById("userChoiceHand");
    let compChoiceHand = document.getElementById("compChoiceHand");
    let result = document.getElementById("result");

    if (userChoice === compChoice) {
        userCounter += 0;
        compCounter += 0;
        setTimeout(function(){
            userScore.innerText = userCounter;
            compScore.innerText = compCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "Ooh, it's a tie!";
            }, 1000);
    } else if (userChoice === choices[0]) {
        if (compChoice === choices[2]) {
            userCounter += 1;
            setTimeout(function(){
                userScore.innerText = userCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "You win this round!";
            }, 1000);
        } else if (compChoice === choices[1]) {
            compCounter += 1;
            setTimeout(function(){
                compScore.innerText = compCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "The computer wins this round.";
            }, 1000);
        }
    } else if (userChoice === choices[2]) {
        if (compChoice === choices[0]) {
            compCounter += 1;
            setTimeout(function(){
                compScore.innerText = compCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "The computer wins this round.";
            }, 1000);
        } else if (compChoice === choices[1]) {
            userCounter += 1;
            setTimeout(function(){
                userScore.innerText = userCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "You win this round!";
            }, 1000);
        }
    } else if (userChoice === choices[1]) {
        if (compChoice === choices[0]) {
            userCounter += 1;
            setTimeout(function(){
                userScore.innerText = userCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "You win this round!";
            }, 1000);
        } else if (compChoice === choices[2]) {
            compCounter += 1;
            setTimeout(function(){
                compScore.innerText = compCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "The computer wins this round.";
            }, 1000);
        }
    }
}

document.getElementById("playAgain").addEventListener('click', function(){
    document.getElementById("playerChoice").style.display = "block";
    document.getElementById("gameAnimation").style.display = "none";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("startGame").style.display = "inline-block";
    document.querySelector("h4").style.display = "none";
    document.querySelector("h5").style.display = "none";
    document.getElementById("userFist").setAttribute('src', "img/rock.svg");
    document.getElementById("compFist").setAttribute('src', "img/rock.svg");
})

document.getElementById("startOver").addEventListener('click', function(){
    userCounter = 0;
    compCounter = 0;
    userScore.innerText = userCounter;
    compScore.innerText = compCounter;
    document.getElementById("playerChoice").style.display = "block";
    document.getElementById("gameAnimation").style.display = "none";
    document.getElementById("startGame").style.display = "inline-block";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("startOver").style.display = "none";
    document.querySelector("h4").style.display = "none";
    document.querySelector("h5").style.display = "none";
    document.getElementById("userFist").setAttribute('src', "img/rock.svg");
    document.getElementById("compFist").setAttribute('src', "img/rock.svg");
});

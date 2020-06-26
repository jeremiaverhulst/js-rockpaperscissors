let userChoice;
let compChoice;
let userCounter = 0;
let compCounter = 0;
let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let getPlayBtn = document.getElementById("startGame");

function disablePlayBtn() {
    getPlayBtn.disabled = true;
    getPlayBtn.classList.add("disabledBtn");
}
disablePlayBtn();

document.getElementById("rock").addEventListener('click', function(){
    userChoice = this.id;
    getPlayBtn.disabled = false;
    getPlayBtn.classList.remove("disabledBtn")
});

document.getElementById("paper").addEventListener('click', function(){
    userChoice = this.id;
    getPlayBtn.disabled = false;
    getPlayBtn.classList.remove("disabledBtn")
});

document.getElementById("scissors").addEventListener('click', function(){
    userChoice = this.id;
    getPlayBtn.disabled = false;
    getPlayBtn.classList.remove("disabledBtn")
});

let choices = ['rock', 'paper', 'scissors'];
document.getElementById("startGame").addEventListener('click', function(){
    document.getElementById("playerChoice").style.display = "none";
    document.getElementById("gameAnimation").style.display = "block";
    getPlayBtn.style.display = "none";
    document.getElementById("playAgain").style.display = "none";
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    compareChoices();
    setTimeout(function(){
        document.querySelector("h4").style.display = "block";
        document.querySelector("h5").style.display = "block";
        document.getElementById("playAgain").style.display = "inline-block";
        document.getElementById("startOver").style.display = "inline-block";
    }, 750);
    setTimeout(function(){
        document.getElementById("userFist").setAttribute('src', "img/"+userChoice+".svg");
        document.getElementById("compFist").setAttribute('src', "img/"+compChoice+".svg");
    }, 700);
});

function compareChoices() {
    let userChoiceHand = document.getElementById("userChoiceHand");
    let compChoiceHand = document.getElementById("compChoiceHand");
    let result = document.getElementById("result");

    //compare choices of user and computer to see who won
    if (userChoice === compChoice) {
        userCounter += 0;
        compCounter += 0;
        setTimeout(function(){
            userScore.innerText = userCounter;
            compScore.innerText = compCounter;
            userChoiceHand.innerText = userChoice;
            compChoiceHand.innerText = compChoice;
            result.innerText = "Ooh, it's a tie!";
            }, 750);
    } else if (userChoice === choices[0]) {
        if (compChoice === choices[2]) {
            userCounter += 1;
            setTimeout(function(){
                userScore.innerText = userCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "You win this round!";
            }, 750);
        } else if (compChoice === choices[1]) {
            compCounter += 1;
            setTimeout(function(){
                compScore.innerText = compCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "The computer wins this round.";
            }, 750);
        }
    } else if (userChoice === choices[2]) {
        if (compChoice === choices[0]) {
            compCounter += 1;
            setTimeout(function(){
                compScore.innerText = compCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "The computer wins this round.";
            }, 750);
        } else if (compChoice === choices[1]) {
            userCounter += 1;
            setTimeout(function(){
                userScore.innerText = userCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "You win this round!";
            }, 750);
        }
    } else if (userChoice === choices[1]) {
        if (compChoice === choices[0]) {
            userCounter += 1;
            setTimeout(function(){
                userScore.innerText = userCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "You win this round!";
            }, 750);
        } else if (compChoice === choices[2]) {
            compCounter += 1;
            setTimeout(function(){
                compScore.innerText = compCounter;
                userChoiceHand.innerText = userChoice;
                compChoiceHand.innerText = compChoice;
                result.innerText = "The computer wins this round.";
            }, 750);
        }
    }

    // Show message if user or computer takes the lead with more than 3 points ahead
    let takingTheLead = document.getElementById("takingTheLead");
    setTimeout(function(){
        if ((userCounter - compCounter) >= 3){
            takingTheLead.innerHTML = "WOW! You are <em>good</em> at this!";
        } else if ((compCounter - userCounter) >= 3) {
            takingTheLead.innerHTML = "Erm... You're losing against your own computer...";
        }
    }, 750);
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
    userScore.innerText = toString(userCounter);
    compScore.innerText = toString(compCounter);
    document.getElementById("playerChoice").style.display = "block";
    document.getElementById("gameAnimation").style.display = "none";
    document.getElementById("startGame").style.display = "inline-block";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("startOver").style.display = "none";
    document.querySelector("h4").style.display = "none";
    document.querySelector("h5").style.display = "none";
    document.getElementById("userFist").setAttribute('src', "img/rock.svg");
    document.getElementById("compFist").setAttribute('src', "img/rock.svg");
    disablePlayBtn();
});

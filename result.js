let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const CompScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx * 3];
};

const drawGame = () => {
    msg.innerText = `Game Was Draw.Play again`;
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor="green";
        

    }
    else {
        ComputerScore++
        CompScorePara.innerText=ComputerScore;
        
        msg.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "red";
       
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
   
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})











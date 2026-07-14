let HumanScore=0;
let ComputerScore=0;

function getComputerChoice() {
    let ComputerChoice=Math.random();
    if(ComputerChoice<0.34){
        console.log("Computer chose rock");
        return "rock";
    }
    else if(ComputerChoice<=0.67){
        console.log("Computer chose paper");
        return "paper";
    }
    else{
        console.log("Computer chose scissors");
        return "scissors";
    }
}

function getHumanChoice(){
    let HumanChoice=prompt("Choose between rock,paper and scissors");
    console.log(`You chose ${HumanChoice}`);
    return HumanChoice.toLowerCase();
}

function playRound(computerChoice, humanChoice) {
    if(computerChoice===humanChoice){
        console.log("It's a tie");
        ComputerScore++;
        HumanScore++;
        return;
    }
    
    const wins={
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    if(wins[humanChoice]===computerChoice){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        HumanScore++;
    }
    
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ComputerScore++;
    }
}

function playGame() {
    for(let i=0; i<5; i++){
        let computerChoice=getComputerChoice();
        let humanChoice=getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
    if(HumanScore>ComputerScore){
        console.log(`You won the game! Final Score: You ${HumanScore} - Computer ${ComputerScore}`);
    }
    else if(HumanScore<ComputerScore){
        console.log(`You lost the game! Final Score: You ${HumanScore} - Computer ${ComputerScore}`);
    }
    else{
        console.log(`The game is a tie! Final Score: You ${HumanScore} - Computer ${ComputerScore}`);
    }
}

playGame();
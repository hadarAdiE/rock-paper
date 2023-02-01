let playerSelection
let computerSelection

let gameRound = 0;
let compScore = 0;
let playerScore = 0;
let buttonEffect = document.querySelectorAll('button');
let btn = document.querySelectorAll('.btn');
let result = document.querySelector('.result');
let score = document.querySelector('.score');
let makeDisapear = document.querySelector('.makeDisapear');
let body = document.querySelector('body');
let title = document.querySelector('h1');
let goAgainBtn = document.querySelector('.goAgain');


// buttonEffect.forEach((btnE) => {
//     btnE.addEventListener('click', () => {
//         btnE.classList.remove('hover');
//     })
// })

btn.forEach(butt => {
    butt.addEventListener('click', game)
});



function game(e) {
    playerSelection = e.target.innerText;
    score.classList.remove('opacity')
    playRound();
    isGameOver();
    // console.log(gameRound)
    //  console.log(`computer choice ${computerSelection}, user choice ${playerSelection}`);
}



function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3) + 1;

    if (randomN === 1) {
        return "rock";
    } else if (randomN === 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

// function getPlayerSelection() {
//     playerSelection = (prompt("what do you choose?")).toLowerCase();
//     if ((playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper")) {
//         return playerSelection;
//     } else {
//         alert("choose one!");
//         return getPlayerSelection();
//     }
// }

function playRound() {
    //show number of game rounds
    ++gameRound;
    title.innerText = `\n Round ${gameRound}`;
    computerSelection = getComputerChoice();

    //variables that keep the score get increased by 1 if won  
    if ((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "rock" && playerSelection === "scissors")) {
        compScore++;
        // score.innerText = `user: ${playerScore}\n computer: ${compScore}`

        result.innerText = `computer chose ${computerSelection}, you chose ${playerSelection}\n computer wins this round`;

    } else if (computerSelection === playerSelection) {
        // score.innerText = `user: ${playerScore}\n computer: ${compScore}`
     result.innerText = `computer chose ${computerSelection}, you chose ${playerSelection}\n its a tie`;
    } else {
        playerScore++
        // score.innerText = `user: ${playerScore}\n computer: ${compScore}`

         result.innerText = `computer chose ${computerSelection}, you chose ${playerSelection}\n  you win this round`;
    };
    score.innerText = `user: ${playerScore}\n computer: ${compScore}`
    

}


function isGameOver() {
    if (gameRound == 5) {
        makeDisapear.style.display = 'none';
        if (playerScore > compScore) {
            body.classList.add('youWone');
            result.style = 'Font-family: Monoton,cursive; font-weight: 100; color: #ffd500';
            result.innerText = `you'v\n wone!`;
        } else if (compScore > playerScore) {
            body.classList.add('computerWines');
            result.style = 'color: #ffffff';
            result.innerText = `HA HA\n you've been beet by a computer!`;
        } else {
            body.classList.add('tie')
            result.innerText = "no winners this game, its a tie!";
        }
        gameRound = 0;
        goAgainBtn.style.display = 'inline-block';
        goAgainBtn.addEventListener('click', () => location.reload());
    }
}



// function game() {
//     for (let index = 1; index < 6; index++) {
//         playRound();
//     }
//     //define which is the winner
//     if (playerScore > compScore) {
//         result.innerText = `you wone! your score is ${playerScore} and computers score is ${compScore}`;
//     } else if (compScore > playerScore) {
//         result.innerText = `you've been beet by a computer! your score is ${playerScore} and computers score is ${compScore}`;
//     } else {
//         result.innerText = "no winners this game, its a tie!";
//     }

// }

// game();
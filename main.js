"use strict"

function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
};
const choices = document.querySelectorAll('.choices')
let playerScore = 0;
let computerScore = 0;
let player = document.getElementById('player');
let computer = document.getElementById('computer');
const scoreContainer = document.getElementById('score-container')
const result = document.getElementById('result')
const computerSelection = getComputerChoice();
const btn = document.getElementById('btn')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.innerText = `It's a draw`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore++;
            player.innerText = `Player: ${playerScore}`
            result.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
            computerScore++;
            computer.innerText = `Computer: ${computerScore}`
            result.innerText = `You lose. ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Something weird happened`;
    };

    if (playerScore === 5 || computerScore === 5) {
        scoreContainer.style.display = 'none';
        choices.forEach(choice => {
            choice.style.display = 'none';
        });
        btn.innerText = `Play again?`;
        getWinner();
    };  
};

function game() {
    rock.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound('rock', computerSelection);
        btn.style.display = 'block';
        // getWinner();
    });
    paper.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound('paper', computerSelection);
        btn.style.display = 'block';
        // getWinner();
    });
    scissors.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound('scissors', computerSelection);
        btn.style.display = 'block';
        // getWinner();
    });
};

function getWinner() {
    if (playerScore > computerScore) {
        result.innerText = `Congratulations! You won the game by ${playerScore - computerScore} points :)`;
    } else if (playerScore < computerScore) {
        result.innerText = `Oh no! You lost the game by ${computerScore - playerScore} points :(`;
    } else {
        result.innerText = `It's a draw, best 3 out of 5?`;
    };
}

game();

btn.addEventListener('click', () => {
    result.innerText = '';
    scoreContainer.style.display = 'grid';
    player.innerText = 'Player: 0';
    computer.innerText = 'Computer: 0';
    choices.forEach(choice => {
        choice.style.display = 'block';
    });
    btn.style.display = 'none';
    window.location.reload();
});
let humanChoice;
        let rock = document.querySelector('#rock');
        let paper = document.querySelector('#paper');
        let scissor = document.querySelector('#scissor');
        let humanScore = document.querySelector('#human');
        let computerScore = document.querySelector('#computer');
        let result = document.querySelector('#result');
        let gameLog = document.querySelector('#gameLog')
        let deleteBtn = document.querySelector('#delete');
        function getComputerChoice() {
            let choice = randomNum(3);
            if (choice == 0) {
                return 'rock';
            } else if (choice == 1) {
                return 'paper';
            } else {
                return 'scissor';
            }
            return;
        }
        function randomNum (max) {
            return Math.floor(Math.random() * max);
        }
        //win lose messages
        function loseMessage(computerChoice = getComputerChoice(), humanChoice) {
            //returns a lose message and plus 1 to computer score
            computerScore.textContent++;
            result.textContent = 'You lose, ' + computerChoice + ' beats ' +humanChoice;
            result.style.color = 'red';
            let log = document.createElement('p');
            log.textContent = result.textContent;
            gameLog.insertBefore(log, deleteBtn)
            return result.textContent;
        }
        function winMessage(computerChoice = getComputerChoice(), humanChoice) {
            //returns a win message and plus 1 to human score
            humanScore.textContent++;
            result.textContent =  'You win, ' + humanChoice + ' beats ' +computerChoice;
            let log = document.createElement('p');
            log.textContent = result.textContent;
            gameLog.insertBefore(log, deleteBtn)
            result.style.color = 'green';
            return result.textContent;
        }
        function drawMessage(computerChoice = getComputerChoice(), humanChoice) {
            //returns a draw message
            result.textContent = 'Draw!';
            let log = document.createElement('p');
            log.textContent = result.textContent;
            gameLog.insertBefore(log, deleteBtn)
            result.style.color = 'black';
            return result.textContent;
        }

        //game functions
        function playRound (computerChoice = getComputerChoice(), humanChoice) {
            //outputs the computer and human choice
            console.log("clicked: " + humanChoice);
            //game logic
            if ((computerChoice == 'rock' && humanChoice == 'scissor')) {
                loseMessage(computerChoice, humanChoice);
            } 
            else if (computerChoice == 'scissor' && humanChoice == 'paper') {
                loseMessage(computerChoice, humanChoice);
            } 
            else if (computerChoice == 'paper' && humanChoice == 'rock') {
                loseMessage(computerChoice, humanChoice);
            }
            else if (computerChoice == 'scissor' && humanChoice == 'rock') {
                winMessage(computerChoice, humanChoice);
            } 
            else if (computerChoice == 'paper' && humanChoice == 'scissor') {
                winMessage(computerChoice, humanChoice);
            } 
            else if (computerChoice == 'rock' && humanChoice == 'paper') {
                winMessage(computerChoice, humanChoice);
            }  
            else if (computerChoice === humanChoice) {
                drawMessage(computerChoice, humanChoice);
            }
            if (computerScore.textContent == 5) {
                result.textContent = 'Game ENDS! COMPUTER WINS HAHAHAHAHAHA';
                computerScore.textContent = 0;
                humanScore.textContent = 0;
                return;
            }
            else if (humanScore.textContent == 5) {
                result.textContent = 'You win... BYE';
                computerScore.textContent = 0;
                humanScore.textContent = 0;
                return;
            }
        }
        rock.addEventListener('click', () => {playRound(getComputerChoice(), 'rock')})
        paper.addEventListener('click', () => {playRound(getComputerChoice(), 'paper')})
        scissor.addEventListener('click', () => {playRound(getComputerChoice(), 'scissor')})
        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.replaceChildren(deleteBtn);
        })
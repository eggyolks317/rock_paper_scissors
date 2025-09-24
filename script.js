let humanChoice;
        let rock = document.querySelector('#rock');
        let paper = document.querySelector('#paper');
        let scissor = document.querySelector('#scissor');
        let humanScore = document.querySelector('#human');
        let computerScore = document.querySelector('#computer');
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
            return 'You lose, ' + computerChoice + ' beats ' +humanChoice;
        }
        function winMessage(computerChoice = getComputerChoice(), humanChoice) {
            //returns a win message and plus 1 to human score
            humanScore.textContent++;
            return 'You win, ' + humanChoice + ' beats ' +computerChoice;
        }
        function drawMessage(computerChoice = getComputerChoice(), humanChoice) {
            //returns a draw message
            return 'Draw!';
        }

        //game functions
        function playRound (computerChoice = getComputerChoice(), humanChoice) {
            //outputs the computer and human choice
            console.log('Computer Choice: ' + computerChoice);
            console.log ('Human Choice: ' + humanChoice); //making human choice not case-sensitive
            //game logic
            if (computerChoice == 'rock' && humanChoice == 'scissor') {
                console.log(loseMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'scissor' && humanChoice == 'paper') {
                console.log(loseMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'paper' && humanChoice == 'rock') {
                console.log(loseMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'rock' && humanChoice == 'rock') {
                console.log(drawMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'scissor' && humanChoice == 'scissor') {
                console.log(drawMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'paper' && humanChoice == 'paper') {
                console.log(drawMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'scissor' && humanChoice == 'rock') {
                console.log(winMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'paper' && humanChoice == 'scissor') {
                console.log(winMessage(computerChoice, humanChoice));
            } else if (computerChoice == 'rock' && humanChoice == 'paper') {
                console.log(winMessage(computerChoice, humanChoice));
            } 
        }
        function playGame (){
            for (let i = 0; i<5 ; i ++) {
                //output which round
                console.log('Round ' + (i+1));
                playRound(getComputerChoice(), humanChoice);
            }
            if (humanScore > computerScore) {
                return 'Human Wins';
            } else if (computerScore > humanScore) {
                return 'Computer Wins';
            } else {
                return 'Draw';
            }
        }
        rock.addEventListener('click', () => {playRound(getComputerChoice(), 'rock')})
        paper.addEventListener('click', () => {playRound(getComputerChoice(), 'paper')})
        scissor.addEventListener('click', () => {playRound(getComputerChoice(), 'scissor')})
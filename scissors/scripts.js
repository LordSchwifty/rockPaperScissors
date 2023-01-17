//global variables
var changeGameBtn = document.getElementById('change-game')
var difficultBtn = document.getElementById('difficult')
var classicBtn = document.getElementById('classic')
var scissorsIcon = document.getElementById('scissors')
var rockIcon = document.getElementById('rock')
var paperIcon = document.getElementById('paper')
var raygunIcon = document.getElementById('raygun')
var lightsaberIcon = document.getElementById('lightsaber')
var currentGame = new Game()
var humanScore = document.querySelector('.human-score')
var computerScore = document.querySelector('.computer-score')
var selectPlayer = document.getElementById('selection')
var instructionView = document.querySelector('.instruction-view')
var gameView = document.getElementById('game-box')
var resultsView = document.getElementById('results')
var humanChoice = document.getElementById('human-choice')
var computerChoice = document.getElementById('computer-choice')

//event listeners
classicBtn.addEventListener('click', classicGameSelection)
difficultBtn.addEventListener('click', difficultGameSelection)
changeGameBtn.addEventListener('click', changeGame)
scissorsIcon.addEventListener('click', function() {chooseIcon(event)})
rockIcon.addEventListener('click', function() {chooseIcon(event)})
paperIcon.addEventListener('click', function() {chooseIcon(event)})
raygunIcon.addEventListener('click', function() {chooseIcon(event)})
lightsaberIcon.addEventListener('click', function() {chooseIcon(event)})

//functions
function classicGameSelection(event) {
    gameView.classList.remove('hidden')
    changeGameBtn.classList.remove('hidden');
    scissorsIcon.classList.remove('hidden');
    rockIcon.classList.remove('hidden');
    paperIcon.classList.remove('hidden');
    classicBtn.classList.add('hidden');
    difficultBtn.classList.add('hidden');
    instructionView.classList.add('hidden')
    currentGame.selectGameType(event);
    selectPlayer.innerText = `Select Your Fighter`
}

function difficultGameSelection(event) {
    changeGameBtn.classList.remove('hidden');
    scissorsIcon.classList.remove('hidden');
    rockIcon.classList.remove('hidden');
    paperIcon.classList.remove('hidden');
    lightsaberIcon.classList.remove('hidden')
    raygunIcon.classList.remove('hidden')
    classicBtn.classList.add('hidden');
    difficultBtn.classList.add('hidden');
    instructionView.classList.add('hidden')
    currentGame.selectGameType(event);
    selectPlayer.innerText = `Select Your Fighter`
}

function changeGame() {
    instructionView.classList.remove('hidden')
    changeGameBtn.classList.add('hidden');
    scissorsIcon.classList.add('hidden');
    rockIcon.classList.add('hidden');
    paperIcon.classList.add('hidden');
    lightsaberIcon.classList.add('hidden')
    raygunIcon.classList.add('hidden')
    classicBtn.classList.remove('hidden');
    difficultBtn.classList.remove('hidden');
    selectPlayer.innerText = `Select Game Type`
}

function chooseIcon(event){
   currentGame.human.takeTurn(event)
   console.log(event.target.id)
   currentGame.standoff()
   updateScore()
   updateWinner()
   showFighters()
   setTimeout(resetPage, 2800)
}

function updateScore() {
    computerScore.innerText = currentGame.computer.wins
    humanScore.innerText = currentGame.human.wins
}

function updateWinner() {
    if(currentGame.winner === 'draw') {
    selectPlayer.innerText = 'draw'
  } else {
    selectPlayer.innerText = `${currentGame.winner.token} WINS!!!`
  }
}
function resetPage() {
    selectPlayer.innerText = 'Select Your Fighter'
    resultsView.classList.add('hidden')
    changeGameBtn.classList.remove('hidden')
    if(currentGame.type === "classic") {
     scissorsIcon.classList.remove('hidden');
     rockIcon.classList.remove('hidden');
     paperIcon.classList.remove('hidden');
  } else if(currentGame.type === 'difficult') {
     scissorsIcon.classList.remove('hidden');
     rockIcon.classList.remove('hidden');
     paperIcon.classList.remove('hidden');
     lightsaberIcon.classList.remove('hidden')
     raygunIcon.classList.remove('hidden')
  }
}

function showFighters() {
    scissorsIcon.classList.add('hidden');
    rockIcon.classList.add('hidden');
    paperIcon.classList.add('hidden');
    lightsaberIcon.classList.add('hidden')
    raygunIcon.classList.add('hidden')
    resultsView.classList.remove('hidden')
    changeGameBtn.classList.add('hidden')
    humanChoice.src = `icons/${currentGame.human.pick}.png`
    computerChoice.src = `icons/${currentGame.computer.pick}.png`
}
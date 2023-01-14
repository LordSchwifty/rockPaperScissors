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
    changeGameBtn.classList.remove('hidden');
    scissorsIcon.classList.remove('hidden');
    rockIcon.classList.remove('hidden');
    paperIcon.classList.remove('hidden');
    classicBtn.classList.add('hidden');
    difficultBtn.classList.add('hidden');
    currentGame.selectGameType(event);
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
    currentGame.selectGameType(event);
}
function changeGame() {
    changeGameBtn.classList.add('hidden');
    scissorsIcon.classList.add('hidden');
    rockIcon.classList.add('hidden');
    paperIcon.classList.add('hidden');
    lightsaberIcon.classList.add('hidden')
    raygunIcon.classList.add('hidden')
    classicBtn.classList.remove('hidden');
    difficultBtn.classList.remove('hidden');
}

function chooseIcon(event){
   currentGame.human.takeTurn(event)
   console.log(event.target.id)
   currentGame.standoff()
   updateScore()
}
function updateScore() {
    computerScore.innerText = currentGame.computer.wins
    humanScore.innerText = currentGame.human.wins
}
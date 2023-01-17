class Player {
    constructor(name, token, pick) {
        this.name = name
        this.token = token
        this.pick = pick
        this.wins = 0
 }
 getRandom() {
    return currentGame.choices[Math.floor(Math.random() * currentGame.choices.length)]
 }
 
 takeTurn(event) {
    currentGame.human.pick = event.target.id
    currentGame.computer.pick = this.getRandom()
 }
}

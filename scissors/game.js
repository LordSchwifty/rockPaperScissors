class Game {
    constructor() {
        this.human = new Player("Human", "🧠" )
        this.computer = new Player("Computer", "🧟‍♂️" )
        this.type = undefined
        this.choices = []
        this.winner = undefined
}
selectGameType(event) {
    if(event.target.id === "classic") {
        this.type = "classic"
        this.choices = ["rock", "paper", "scissors"]
    } else if(event.target.id === "difficult")
        this.type = "difficult"
        this.choice = ["rock", "paper", "scissors", "raygun", "lightsaber"]
}
standoff() {

}
}
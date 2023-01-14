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
    if(this.human.pick === "rock" && this.computer.pick === "scissors") {
        this.winner = this.human
        this.human.wins += 1
    } else if(this.computer.pick === "rock" && this.human.pick === "scissors") {
        this.winner = this.computer
        this.computer.wins += 1
    } else if(this.human.pick === "paper" && this.computer.pick === "rock") {
        this.winner = this.human
        this.human.wins +=1
    } else if (this.computer.pick === "paper" && this.human.pick === "rock") {
        this.winner = this.computer
        this.computer.wins += 1
    } else if(this.human.pick === "scissors" && this.computer.pick === "paper") {
        this.winner = this.human
        this.human.wins += 1
    } else if(this.computer.pick === "scissors" && this.human.pick === "paper") {
        this.winner = this.computer
        this.computer.wins += 1
    } else if(this.computer.pick === this.human.pick) {
        return `Draw!`
    }

}
}
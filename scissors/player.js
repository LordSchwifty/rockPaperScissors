class Player {
    constructor(name, token, pick) {
        this.name = name;
        this.token = token;
        this.pick = pick;
        this.wins = 0;
 }
 getRandom() {
    return currentGame.choices[Math.floor(Math.random() * currentGame.choices.length)];
    
    };
 
 takeTurn(event) {
    currentGame.human.pick = event.target.id
    currentGame.computer.pick = this.getRandom()
    // if(this.name === "Human") {
    //     this.pick = event.target.id
    // } else if(this.name === "Computer") {
        console.log(currentGame.computer.pick)
    // }
    console.log(event.target.id)
    console.log(currentGame.choices)
}
}

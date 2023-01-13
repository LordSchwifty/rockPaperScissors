class Player {
    constructor(name, token, pick) {
        this.name = name;
        this.token = token;
        this.pick = pick;
        this.wins = 0;
 }
 getRandom() {
    console.log(currentGame.choices[Math.floor(Math.random() * currentGame.choices.length)]);
    
    };
 
 takeTurn(event) {
    if(this.name === "Human") {
        this.pick = event.target.id
    } else if(this.name === "computer") {
        this.pick = this.getRandom()
    }
    console.log(event.target.id)
}
}

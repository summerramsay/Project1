let rounds = prompt("How many rounds do you want to play?");
//alert("This is how many you want to play, " + rounds);
let integer = parseInt(rounds, 10);
//alert(integer);

winCounter = 0
loseCounter = 0
tieCounter = 0

for(let i = rounds; i > 0; i--) {
    let input = prompt("Choose r, p, s (rock, paper, scissors)")
    randomNumber = Math.floor(Math.random() * 3)
    
    if(randomNumber === 0) {
        let computerChoice = "r"
       if(input === computerChoice){
        tieCounter++
        alert("You tied, the computer also chose r")
       } else if(input === "p") {
        winCounter++
        alert("You win! You picked p which beats r")
       } else if(input === "s") {
        loseCounter++
        alert("You lost, the computer chose r which beats s")
       }

    } else if(randomNumber === 1) {
        computerChoice = "p"
        if(input === computerChoice) {
            tieCounter++
            alert("You tied, the computer also chose p")
        } else if(input === "r") {
            loseCounter++
            alert("You lost, the computer chose p which beats r")
        } else if(input === "s") {
            winCounter++
            alert("You win! You picked s which beats p")
        }
    } else if(randomNumber === 2) {
        computerChoice = "s"
        if(input === computerChoice) {
            tieCounter++
            alert("You tied, the computer also chose s")
        } else if(input === "r") {
            winCounter++
            alert("You win! You picked r which beats s")
        } else if(input === "p") {
            loseCounter++
            alert("You lost, the computer chose s which beats p")
        }
    }
}
alert("You won " + winCounter + " times," + " you lost " + loseCounter + " times, " + "you tied " + tieCounter + " times.")

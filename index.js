let scoreLeft = 0;
let scoreRight = 0;

document.getElementById("score-left").textContent = scoreLeft;
document.getElementById("score-right").textContent = scoreRight;

function updateScore(side, increment) {
    if (side === 'left') {
        scoreLeft += increment;
        document.getElementById("score-left").textContent = scoreLeft;
    } else if (side === 'right') {
        scoreRight += increment;
        document.getElementById("score-right").textContent = scoreRight;
    }
    console.log("Clicked");
}

function resetScore(){
    scoreLeft = 0
    scoreRight = 0
    document.getElementById("score-left").textContent=scoreLeft
    document.getElementById("score-right").textContent=scoreRight
    console.log("clicked")
}
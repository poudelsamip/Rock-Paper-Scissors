let choices = document.querySelectorAll(".btn");
let you = 0;
let comp = 0;
let humanScore = document.querySelector("#humanScore");
let compScore = document.querySelector("#compScore");
let yourSpan = document.querySelector("#human");
let compSpan = document.querySelector("#computer");
let gamestatus = document.querySelector("#status");

function updateScore(){
    humanScore.innerText = you;
    compScore.innerText = comp;
}

function updateChoice(currChoice, compChoice){
    yourSpan.innerText = currChoice;
    compSpan.innerText = compChoice;
}

function computer(){
    const arr = ["rock","paper","scissors"];
    return arr[Math.floor(Math.random()*3)];
}

function play(currChoice, compChoice){
    if(currChoice == compChoice){
        gamestatus.innerText = "Game Draw";
        return;
    }
    else{
        if(currChoice == "rock"){
            if(compChoice == "scissors"){
                you++;
                gamestatus.innerText = "You win";
            }
            else{
                comp++;
                gamestatus.innerText = "AI win";
            }
        }
        else if(currChoice == "paper"){
            if(compChoice == "rock"){
                you++;
                gamestatus.innerText = "You win";
            }
            else{
                comp++;
                gamestatus.innerText = "AI win";
            }
        }
        else{
            if(compChoice == "paper"){
                you++;
                gamestatus.innerText = "You win";
            }
            else{
                comp++;
                gamestatus.innerText = "AI win";
            }
        }
    }
    updateChoice(currChoice, compChoice);
    updateScore();
}

choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        let currChoice = choice.getAttribute("id");
        let compChoice = computer();
        play(currChoice, compChoice);
    });
});
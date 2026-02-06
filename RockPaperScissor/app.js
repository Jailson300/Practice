let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", 'scissors'];
    const radIdx = Math.floor(Math.random()*3);
    return options[radIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
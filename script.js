let userName = prompt("Hello! What is your name?");
let holes = prompt("Hello, " + userName + " how many holes would you like to play today? (3 or 6)");
let score = 0;

if (holes == 3) {
    let par = 9;
    let hole1 = Number(prompt("How many putts for hole 1? (par is 3)"));
    let hole2 = Number(prompt("How many putts for hole 2? (par is 3)"));
    let hole3 = Number(prompt("How many putts for hole 3? (par is 3)"));
    score += hole1 + hole2 + hole3 - par;
    if (score === 0) {
        console.log("Good game, " + userName + "! Your total war was: 0");
        alert("Good game, " + userName + "! Your total par was: 0");
    } else if (score < 0) {
        console.log("Great job, " + userName + "! Your par was:" + score + "!");
        alert("Great job, " + userName + "! Your par was: " + score + "!");
    } else if (score > 0) {
        console.log("Nice try, " + userName + ". Your par was:" + score + ".");
        alert("Nice try, " + userName + ". Your par was: +" + score + ".");
    }

} else if (holes == 6) {
    let par = 18;
    let hole1 = Number(prompt("How many putts for hole 1? (par is 3)"));
    let hole2 = Number(prompt("How many putts for hole 2? (par is 3)"));
    let hole3 = Number(prompt("How many putts for hole 3? (par is 3)"));
    let hole4 = Number(prompt("How many putts for hole 4? (par is 3)"));
    let hole5 = Number(prompt("How many putts for hole 5? (par is 3)"));
    let hole6 = Number(prompt("How many putts for hole 6? (par is 3)"));
    score += hole1 + hole2 + hole3 + hole4 + hole5 + hole6 - par;
    if (score === 0) {
        console.log("Good game, " + userName + "! Your total war was: 0");
        alert("Good game, " + userName + "! Your total par was: 0");
    } else if (score < 0) {
        console.log("Great job, " + userName + "! Your par was:" + score + "!");
        alert("Great job, " + userName + "! Your par was: " + score + "!");
    } else if (score > 0) {
        console.log("Nice try, " + userName + ". Your par was:" + score + ".");
        alert("Nice try, " + userName + ". Your par was: +" + score + ".");
    }
    
} else {
    console.log("I'm sorry, " + userName + " that is not a valid choice. Please press refresh and choose either 3 or 6 holes. Thank you!");
    alert("I'm sorry, " + userName + " that is not a valid choice. Please refresh the page and choose either 3 or 6 holes. Thank you!");
}



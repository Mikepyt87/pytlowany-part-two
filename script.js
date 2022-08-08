let userName = prompt("Hello! What is your name?");
let holes = prompt("Hello, " + userName + " how many holes would you like to play today? (3 or 6)");
let score = 0;

if (holes == 3) {
    let par = 9;
    let hole1 = Number(prompt("How many putts for hole 1? (par is 3)"));
    let hole2 = Number(prompt("How many putts for hole 2? (par is 3)"));
    let hole3 = Number(prompt("How many putts for hole 3? (par is 3)"));
    score += hole1 + hole2 + hole3 - par;
    console.log("Good game, " + userName + "! Your par was:" + score);
    alert("Good game, " + userName + "! Your par was: " + score + "!");

} else if (holes == 6) {
    let par = 18;
    let hole1 = Number(prompt("How many putts for hole 1? (par is 3)"));
    let hole2 = Number(prompt("How many putts for hole 2? (par is 3)"));
    let hole3 = Number(prompt("How many putts for hole 3? (par is 3)"));
    let hole4 = Number(prompt("How many putts for hole 4? (par is 3)"));
    let hole5 = Number(prompt("How many putts for hole 5? (par is 3)"));
    let hole6 = Number(prompt("How many putts for hole 6? (par is 3)"));
    score += hole1 + hole2 + hole3 + hole4 + hole5 + hole6 - par;
    console.log("Good game, " + userName + "! Your par was:" + score);
    alert("Good game, " + userName + "! Your par was: " + score + "!");
} else {
    console.log("I'm sorry, " + userName + " but that is not a valid answer. Press refrewsh and try again." );
    alert("I'm sorry, " + userName + " but that is not a valid answer. Press refresh and try again." );
 }


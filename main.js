console.log("JS loaded");

// When a user types in a question, they have to CLICK enter to receive an answer
// An answer will be chosen at random
// The answer will be in the dark blue circle 
// After hitting enter the answer should say either: "Yes", "No, sorry", or "Possibly"



document.querySelector("form").addEventListener("submit", submitMe);


function submitMe(e) {
    e.preventDefault();
    var answersArr = ["HELL Yes!", "Hell NO!", "uh Prolly."];
    var randomArr = answersArr[Math.floor(answersArr.length * Math.random())];
    document.querySelector(".answer").innerText = randomArr;
 
}
document.getElementsByClassName("reset.btn").reset( function() {
    
}); 



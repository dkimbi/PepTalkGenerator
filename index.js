/*
//import * as from "wordArrays";

//document.getElementById("count-el").innerText = 5


// column one of words
*/
const columnFour = [
    "24/7.", "can I get an amen?", "and that's a fact.", "so treat yourself.", "you feel me?", "that's just science.", "would I lie?","for reals.","mic drop.","you hidden gem.","snuggle bear.","period.","can I get an amen?","now let's dance.",
    "high five.","say it again!","according to CNN.","so get used to it."
        ];
    
//document.getElementById("count-el").innerText = columnFour[Math.random()]
// document.querySelector("count-el-dee").innerText = columnFour[Math.random()]

//nameDee = columnFour[Math.random()]

// document.querySelector('main').innerHTML = sentence;

// document.querySelector('word-el').innerHTML = `<h3>${nameDee}</h3>`;

function motivationalSentense(){
    indexNumberGen = Math.floor(Math.random() * 10)
    motivationalWord = columnFour[indexNumberGen]
    console.log(motivationalWord);
    document.getElementById("word-el").innerText = motivationalWord

}


/*
let myName = "Blue";

alert(`Hi, ${myName}. Want to see something cool?`);

document.querySelector('html').innerHTML = `<h1>Welcome to ${myName}'s site!</h1>`;



let count = 5

count = count + 1 

console.log(count)


function increment(){
    console.log("Button clicked!")
}

// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function theAnswer(){
    console.log(42)
}

theAnswer()
*/

count = 0;
// listen for clicks on the increment button
function increment(){
    count++
    console.log(count)
    document.getElementById("count-el").innerText = count

}

// increment the count variable when the button is clicked (log it out)


// change the count-el in the HTML to reflect the new count

//document.getElementById("count-el").innerText = count


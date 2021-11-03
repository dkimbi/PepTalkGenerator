//import { columnOne, columnTwo, columnThree, columnFour } from 'wordArrays';



const columnOne = [
    "Champ", "Fact", "Everybody says", "Dang...", "Check it:", "Just saying...", "Superstar,","Tiger","Self,","Know this:","News alert","Girl,","Ace,","Excuse me but",
    "Experts agree:","In my opinion,","Hear ye, hear ye:","Okay, listen up:"
        ];
    
    // column one of words
const columnTwo = [
    "the mere idea of you", "your soul", "your hair today", "everything you do", "your personal style", "every thought you have", "that sparkle in your eye","your presence here","what you got going on","the essential you","your life's journey","that saucy personality","your DNA","that brain of yours",
    "your choice of attire","the way you roll","whatever your secret is","all of y'all"
        ];
    
    // column one of words
const columnThree = [
    "has a serious,", "rains magic,", "deserves the Nobel Prize,", "raises the roof,", "breed miracles,", "is paying off big time,", "shows mad skills,","just shimmers,","is a national treasure,","gets the party hopping,","the next big thing,","roars like a lion,","is a rainbow factory,","is made of diamonds,","makes birds sing,","should be taught in school,","makes my world go round,","is 100% legit,"
        ];
    
    // column one of words
const columnFour = [
    "24/7.", "can I get an amen?", "and that's a fact.", "so treat yourself.", "you feel me?", "that's just science.", "would I lie?","for reals.","mic drop.","you hidden gem.","snuggle bear.","period.","can I get an amen?","now let's dance.",
    "high five.","say it again!","according to CNN.","so get used to it."
        ];
    


function firstWordColumn(){
    indexNumberGenOne = Math.floor(Math.random() * 18)
    motivationalWordOne = columnOne[indexNumberGenOne]
    console.log(motivationalWordOne);
    document.getElementById("word-el").innerText = motivationalWordOne

}

function secondWordColumn(){
    indexNumberGenTwo = Math.floor(Math.random() * 18)
    motivationalWordTwo = columnTwo[indexNumberGenTwo]
    console.log(motivationalWordTwo);
    document.getElementById("word-el").innerText = motivationalWordTwo

}

function thirdWordColumn(){
    indexNumberGenThree = Math.floor(Math.random() * 18)
    motivationalWordThree = columnThree[indexNumberGenThree]
    console.log(motivationalWordThree);
    document.getElementById("word-el").innerText = motivationalWordThree

}

function fourthWordColumn(){
    indexNumberGenFour = Math.floor(Math.random() * 18)
    motivationalWordFour = columnFour[indexNumberGenFour]
    console.log(motivationalWordFour);
    document.getElementById("word-el").innerText = motivationalWordFour

}


function motivationalSentence() {

    wordChoiceOne = firstWordColumn();
    wordChoiceTwo = secondWordColumn();
    wordChoiceThree = thirdWordColumn();
    wordChoiceFour = fourthWordColumn();

    //let motivationalWord = `${firstWordColumn},${secondWordColumn},${thirdWordColumn},${fourthWordColumn}`
    //motivationalWord = motivationalWordOne + motivationalWordTwo + motivationalWordThree + motivationalWordFour

    motivationalWord = `${motivationalWordOne} ${motivationalWordTwo} ${motivationalWordThree} ${motivationalWordFour}`

    // motivationalWord = wordChoiceOne.concat('',wordChoiceTwo , wordChoiceThree, wordChoiceFour)

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

}

theAnswer()
*/

let countEL = document.getElementById("count-el")
let count = 0;

let saveEL = document.getElementById("save-el")


// listen for clicks on the increment button
function increment() {
    count+=1
    //console.log(count)
    countEL.textContent = count
    // save(count)

}

// increment the count variable when the button is clicked (log it out)


// change the count-el in the HTML to reflect the new count

// Save count from increment function
function save(){
    let countString = count + " > "
    saveEL.textContent+=countString
    console.log(count)
}


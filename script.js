const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
    "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
    


let passSuggestion1 = document.getElementById("btnPasswordPlaceholder1")
let passSuggestion2 = document.getElementById("btnPasswordPlaceholder2")




console.log(passSuggestion1)
console.log(passSuggestion2)

function generatePassword(){

    // based on resource
    //https://java2blog.com/fill-array-with-random-numbers-javascript/

    const randomCharsPass1 = Array.from(
    { length: currentValue }, // Specify lenfgth of charachters || total characters.length
    () => characters[Math.floor(Math.random() * characters.length)]
    );
    const randomCharsPass2 = Array.from(
    { length: currentValue }, // Specify lenfgth of charachters || total characters.length
    () => characters[Math.floor(Math.random() * characters.length)]
    );
    //ALTERNATIVELY
    //let let randomChars = [];
    //for (let i = 0; i < characters.length; i++) {
    //let randomIndex = Math.floor(Math.random() * characters.length);
    //randomChars.push(characters[randomIndex]);
    //}

    passSuggestion1.textContent = randomCharsPass1.join("")
    passSuggestion2.textContent = randomCharsPass2.join("")
}



//import slider elements

const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");
let currentValue = slider.value

// update display when slider moves
slider.addEventListener("input", function sliderValue() {
    currentValue = slider.value;
    output.textContent = currentValue;
    console.log(currentValue)
});  
        




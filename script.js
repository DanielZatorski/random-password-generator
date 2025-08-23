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

    const randomChars = Array.from(
    { length: 15 }, // Specify lenfgth of charachters || total characters.length
    () => characters[Math.floor(Math.random() * characters.length)]
    );


    return console.log(randomChars.join(""))

}




generatePassword()





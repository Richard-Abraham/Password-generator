const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxEl1 = document.getElementById("box-el1");
let boxEl2 = document.getElementById("box-el2");
let length = 7
let password1 ="";


function getPassword(){
    let a='', b='';
    for(let i=0; i< length; i++)
    {
        a+=characters[Math.floor(Math.random()*characters.length)];
        b+=characters[Math.floor(Math.random()*characters.length)];
    }
    boxEl1.textContent = a;
    boxEl2.textContent = b;
}
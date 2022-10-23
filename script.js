const mainStuff = document.getElementById("mainstuff");
const addedText = mainStuff.appendChild(document.createElement("p"))

addedText.innerText = "this is added text";
addedText.style.color = "red";

console.log("js is working");
let text = document.getElementById('Typewriter');

const textArray = text.textContent.split("");

console.log(textArray)

let timeLooper;

text.innerHTML = "";

function typewriterEffect() {
    if (textArray.length > 0) {
        text.innerHTML += textArray.shift();
    }else {
        clearTimeout(timelooper);
    }
    timelooper = setTimeout(
        "typewriterEffect()", 
        Math.floor(Math.random() * (200, 250))
    );  
}
typewriterEffect();
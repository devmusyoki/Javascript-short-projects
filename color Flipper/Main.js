const colors = ["green", "red", "rgba(133,122,200)", "f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color")

btn.addEventListener("click",function(){
    // get random between 0-3 colors(0)

    const Randomclr = getRandomclr();
    console.log(Randomclr);

    document.body.style.backgroundColor = colors[Randomclr];
    color.textContent = colors[Randomclr]
})

function getRandomclr(){
    return Math.floor(Math.random() * colors.length);
}

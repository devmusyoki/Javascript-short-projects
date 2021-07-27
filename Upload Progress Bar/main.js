const startBtn= document.getElementById('start-btn');
const progress= document.getElementById('Progress-bar');
const mybar= document.getElementById('myBar');
const bgImg= document.getElementById('Bg-img');


bgImg.classList.add('blur')

let root_speed = getComputedStyle(document.documentElement);

console.log(root_speed.getPropertyValue("--speed"));

document.documentElement.style.setProperty('--speed', "15s")
console.log(root_speed.getPropertyValue('--speed'))

let speed = 100;

document.documentElement.style.setProperty('--speed', `${speed / 10}s`)
console.log(root_speed.getPropertyValue('--speed'))

let i = 0;

startBtn.addEventListener("click", () => {
    if( i== 0) {
        i = 1;

        let width = 0;
        setInterval(frame, speed);
        function frame() {
            if(width >= 100) {
                i = 0;
            }else {
                width++;
                mybar.style.width=width + "%";
                mybar.innerHTML=width + "%";
                bgImg.classList.remove("blur");
                bgImg.classList.add("clear");
                
            }
        }
    }
})


const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]"); 
const elements = document.querySelectorAll(".element");
const selectColor =document.getElementById("SelectColor");

checkbox.disabled= true; 
submitBtn.disabled = true
console.log(submitBtn)
console.log(elements);

// Assign color to elements
elements.forEach(function(element){
    const color = getRandomColor();

   element.style.background = color;
   element.innerHTML= color;
   selectColor.innerHTML = color;

});


// generate random color Function
function getRandomColor (){
    const letter = "0123456789ABCDEF";
    let color="#";
    for (let i =0; i<6; i++){
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color; 
}
//check if color is right
elements.forEach(function(element){
    element.addEventListener('click', function(){
        if(element.innerHTML === selectColor.innerHTML)
        {
          alert('You Good!');
          checkbox.checked = true;
          submitBtn.disabled = false;
          submitBtn.classList.remove("btn-light");
          submitBtn.classList.add("btn-success");
        } else {
            alert('try again !!!');
            location.reload(true)

        }
    });
});



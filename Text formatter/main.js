const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

console.log(inputField)
console.log(outputField)

inputField.addEventListener("keyup", getValue);

function getValue() {
    outputField.innerHTML = inputField.value;
}

const uppercaseBtn = document.querySelector('.uppercase')

uppercaseBtn.addEventListener("click",() =>{
    return(outputField.innerHTML=outputField.innerHTML.toUpperCase());
});

document.querySelector('.lowercase').onclick=()=>{
    (outputField.innerHTML=outputField.innerHTML.toLowerCase());
};
document.querySelector('.capitalize').onclick=()=>{
    (outputField.innerHTML = outputField.innerHTML.charAt(0).toUpperCase() + outputField.innerHTML.slice(1).toLowerCase());
};
document.querySelector('.italics').onclick=()=>{
    return(outputField.innerHTML=outputField.innerHTML.toItalic());
};
document.querySelector('.underline').onclick=()=>{
    return(outputField.innerHTML=outputField.innerHTML.toUnderline());
};

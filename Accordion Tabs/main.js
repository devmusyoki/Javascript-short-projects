// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// console.log(accordionItemHeaders)

// accordionItemHeaders.forEach(function
//     (accordionItemHeader) {
//         accordionItemHeader.addEventListener("click",
//         function(){
//             accordionItemHeader.classList.toggle("active")

//         const accordionItemBody=accordionItemHeader.nextElementSibling;

//         if(accordionItemHeader.classList.contains('active')){
//             accordionItemBody.style.maxHeight=accordionItemBody.scrollHeight + "px";
//         }else{
//             accordionItemBody.style.maxHeight= 0;
//         }
//         })
// });


// Refactored

document.querySelectorAll(".accordion-item-header").forEach((accordionItemHeader)=>accordionItemHeader.onclick=()=>{
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.
    nextElementSibling;

    accordionItemHeader.classList.contains("active")?
    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px":
    accordionItemBody.style.maxHeight= 0;

});
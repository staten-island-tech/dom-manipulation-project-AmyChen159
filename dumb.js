/*const DOMselectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
}; */
// function makeAlbum(){
//     //return an object
// }
// function addCard(Album){}
// DOMselectors.form.addEventListener("submit", function(event){
//     event.preventDefault();
//     document.querySelector(".gallery")
//     .insertAdjacentElement(
//         "afterbegin",
//         `<div class="card"><div class="card-title"> $(Album.name)</div></div>`
//     );
//     console.log(DOMselectors.firstName.value);
//     DOMselectors.h2s.forEach((el)=> el.textContent = DOMselectors.firstName.value
    
//     //const Album = makeAlbum();
//     //addcard()
//     //clearFields()
//     //addRemoveButtons
//     );
// });
// //dont use onclick(?)

const DOMselectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    element: document.querySelector(".element"),
    image: document.querySelector(".image"),
    gallery: document.querySelector(".gallery"),
    submit: document.querySelector("#submit"),
}

DOMselectors.submit.addEventListener("click", function(event){
    event.preventDefault()
    const name = DOMselectors.name.value
    const element = DOMselectors.element.value
    const image = DOMselectors.image.value

    if (name && element && image) {
        createCard(name, element, image)
    }
})

function createCard(name, element, image) {
    /*const holder = document.createElement("div")
    holder.classList.add("holder")
   
    const name = `${name}`
    const element = `${element}`
    const image = document.createElement("image")
    image.scr = image

    holder.insertAdjacentHTML("afterbegin", name)
    holder.insertAdjacentHTML("afterbegin", element) */

    const card = document.createElement("div")
    card.classList.add(card)
    
    const name = document.createElement("h2")
    const element = document.createElement("p")
    const image = document.createElement("img")

    let name = document.createTextNode(name)
    let element = document.createTextNode(element)
    img.src = image

    name.appendchil
}
https://www.youtube.com/watch?v=vRic4SFmT8I

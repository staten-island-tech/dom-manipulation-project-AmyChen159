const DOMselectors = {
    form: document.getElementById("form"),
    input: document.querySelector(".input"),
    name: document.getElementById("name"),
    line2: document.getElementById("line2"),
    image: document.getElementById("image"),
    gallery: document.querySelector(".gallery"),
    submit: document.querySelector(".submit"),
    remove: document.querySelectorAll(".remove")
}

function createCard() {
    let card = {};
    card.name = DOMselectors.name.value
    card.line2 = DOMselectors.line2.value
    card.image = DOMselectors.image.value
    
    DOMselectors.submit.insertAdjacentHTML(
      `afterend`,
      `<div class="cards">
        <p>${card.name}</p>
        <p>${card.line2}</p>
        <p><img src= "${card.image}"/></p>
         <button class="remove">Remove</button>
    </div>`
    );
  }
  

function clear() {
    DOMselectors.name.value = ""
    DOMselectors.line2.value = ""
    DOMselectors.image.value = "" 
}

function remove() {
    let remove = document.querySelectorAll(".remove")
    remove.forEach((btn) => {
        btn.addEventListener("click", function (createCard) {
            createCard.target.parentElement.remove()
        })
    })
}

DOMselectors.form.addEventListener("submit", function (create) {
    create.preventDefault()
    createCard()
    clear()
    remove()
})

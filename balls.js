const DOMselectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".name"),
    line2: document.querySelector(".line2"),
    image: document.querySelector(".image"),
    gallery: document.querySelector(".gallery"),
    submit: document.querySelector("#submit"),
}

function createCard() {
    let card = {}
    card.name = DOMselectors.name.value 
    card.line2 = DOMselectors.line2.value
    card.image = DOMselectors.image.value

    DOMselectors.submit.insertAdjacentElement("afterend",
    `${card.name}`
    <p>${card.line2}</p>
    )
}

/* function remove() {
    let buttons = document.querySelectorAll("button")
    buttons.forEach(btn) => function(event){
        (event.target.parentElement);
    }
} */

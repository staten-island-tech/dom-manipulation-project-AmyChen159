const DOMselectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};
function makeAlbum(){
    //return an object
}
function addCard(Album){}
DOMselectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    document.querySelector(".gallery")
    .insertAdjacentElement(
        "afterbegin",
        `<div class="card"><div class="card-title"> $(Album.name)</div></div>`
    );
    console.log(DOMselectors.firstName.value);
    DOMselectors.h2s.forEach((el)=> el.textContent = DOMselectors.firstName.value
    
    //const Album = makeAlbum();
    //addard()
    //clearFields()
    //addRemoveButtons
    );
});
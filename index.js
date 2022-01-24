let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let notes=JSON.parse(localStorage.getItem("notes"));
if(notes){
    notes.forEach(element => {
        addNotes(element);
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes();
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
    }
    if(titleval){
        card.innerHTML=`<h2>${titleval}</h>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Delete</button>`;
        notesElem.appendChild(card);
        
    }
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=>{
        card.remove();
        ;
    })
}


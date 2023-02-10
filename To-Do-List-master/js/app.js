const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

let LIST = [
];

let id = 0;

const chk = "fa-check-circle";
const unchk = "fa-circle-thin";

function addToDo(toDo, id, done, trash){
    if(!trash){
        const DONE = done ? chk : unchk;
        const item = `
                <li class="item">
                    <i class="fa ${DONE} co cir-it" job="complete" id="${id}"></i>
                    <p class="text cir-it">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                </li>   
                `;

        const position = "beforeend";
        list.insertAdjacentHTML(position, item);
    }
}

document.addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        const toDo = input.value;
        if(toDo) {
            addToDo(toDo);
            LIST.push({
                name:toDo,
                id:id,
                done:false,
                trash:false
            });
            id++;
        }
        input.value = "";
    }
});



list.addEventListener("click", function(event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;
    if(elementJob === "complete")
        completeToDo(element);
    if(elementJob === "delete")
        removeToDo(element);
})


function completeToDo(element) {
    element.classList.toggle(chk);
    element.classList.toggle(unchk);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}


function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

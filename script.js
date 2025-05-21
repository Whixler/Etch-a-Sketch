const box = document.querySelector("#container");
let gridSize = 16;

function createBox(gridSize){
    for(i=1; i<=(gridSize*gridSize); i++){
        const content = document.createElement("div");
        content.classList.add("box");
        content.textContent = i;
        box.appendChild(content);
}}

function removeBox(){
    box.innerHTML = "";
}

document.querySelector("button").addEventListener('click', () => {
    let gridSize = window.prompt("Enter gridsize", 16);
    console.log(gridSize);
    removeBox();
    createBox(gridSize);
})



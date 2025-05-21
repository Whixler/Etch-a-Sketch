const box = document.querySelector("#container");
let widthBox;
let gridSize = 16;

function createGrid(size){
    box.innerHTML = ""
    widthBox = 640 / gridSize - 2;

    for(i=1; i<=(gridSize*gridSize); i++){
        const cell = document.createElement("div");
        cell.classList.add("box");
        cell.style.width = widthBox + "px";
        cell.style.height = widthBox + "px";
        box.appendChild(cell);
}}



document.querySelector("button").addEventListener('click', () => {
    gridSize = window.prompt("Enter gridsize", 16);
    createGrid(gridSize);
})

createGrid(16);
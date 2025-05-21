const box = document.querySelector("#container");
let gridSize = 16;

function createGrid(size){
    box.innerHTML = ""
    let widthBox = 640 / gridSize - 2;
    hover()

    for(i=1; i<=(gridSize*gridSize); i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = widthBox + "px";
        cell.style.height = widthBox + "px";
        box.appendChild(cell);
}}

function hover(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "orange";
        })        
    })
}

document.querySelector("#gridSize").addEventListener('click', () => {
    gridSize = window.prompt("Enter gridsize", 16);
    createGrid(gridSize);
    hover();
})

document.querySelector("#reset").addEventListener('click', () =>{
    reset();
    hover();
})

function reset(){
        const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "#1F2937";     
    })
}

createGrid(16);
hover();
const box = document.querySelector("#container");

for(i=1; i<=256; i++){
const content = document.createElement("div");
content.classList.add("box");
content.textContent = i;

box.appendChild(content);
}

document.querySelector("button").addEventListener('click', () => {
    let gridSize = window.prompt("Enter gridsize", 16);
    console.log(gridSize);
})



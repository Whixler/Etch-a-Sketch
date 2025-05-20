const box = document.querySelector("#container");

for(i=1; i<=256; i++){
const content = document.createElement("div");
content.classList.add("content");
content.textContent = i;

box.appendChild(content);
}



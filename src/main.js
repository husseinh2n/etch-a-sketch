const gridContainer = document.querySelector(".grid-container");
const sizebutton = document.querySelector(".size");
const defaultButton = document.querySelector(".default");
const RainbowButton = document.querySelector(".rainbow");
const darkButton = document.querySelector(".dark");
const eraseButton = document.querySelector(".erase");
const resetButton = document.querySelector(".reset");
let MODE = "default"

makeGrid();



sizebutton.addEventListener("click", () => UserResize());
defaultButton.addEventListener("click",()=> MODE="default");
RainbowButton.addEventListener("click",()=> MODE="rainbow");
darkButton.addEventListener("click",()=> MODE="grey");
eraseButton.addEventListener("click",()=> MODE="erase");
resetButton.addEventListener("click",()=> makeGrid());

function makeGrid(size= 8){
    gridContainer.innerHTML = '' //empty grid if full with something
    for (let i = 0; i < size; i++) { //make and instert rows
        const row = makeRow(size);
        for (let j = 0; j < size; j++) { //make and insert cells
            let cell = makeCell(size);
            row.appendChild(cell);
        }
        gridContainer.appendChild(row); //insert row in grid container
    }
    return;
}

function makeRow(size){ 
    const div = document.createElement("div");
    div.setAttribute("id","row");
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.height = (100/size) + "%";
    return div;
}

function makeCell(size){ 
    const  cell = document.createElement("div");
    cell.setAttribute("id", "cell");
    cell.style.width = (100/size) + "%";
    cell.style.height = 100 + "%";
    cell.style.border = "solid 1px black";
    cell.style.backgroundColor = "white";
    return cell;
}

function colorCell(cell) {
    let mode = MODE;
    switch (mode) {
        case "grey":
          cell.style.backgroundColor = "lightGrey"
          break;
        case "rainbow":
        cell.style.backgroundColor = getRandomRgb(cell.style.backgroundColor);
          break;
        case "default":
            cell.style.backgroundColor = "darkorchid"
            break;
        case "erase":
            cell.style.backgroundColor = "white"
            break;
        default:
            cell.style.backgroundColor = "red"
            break;
      }
}

function getRandomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

function UserResize(){
    size = prompt("What size grid would you like to make?");
  if ((size <= 100) && (size > 0)) {
    makeGrid(size);
  } else {
    size = prompt("sorry please enter a new value between 1 & 100.");
  }
}
gridContainer.addEventListener("mouseover", function (e) {
    colorCell(e.target);
})
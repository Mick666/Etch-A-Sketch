const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
var btn = document.querySelector('#btn');
btn.addEventListener('click', resetGrid);
var btnRandom = document.querySelector('#btnRandom');
btnRandom.addEventListener('click', useRandomColor);



makeGrid(256);

function makeGrid(num) {
    makeCells(num);
}

function useRandomColor() {
    resetEventListeners();
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    const gridCells = document.querySelectorAll('.cell');
    gridCells.forEach(cell => cell.addEventListener('mouseover', randomColor));

    function randomColor(e) {
        this.style.backgroundColor = getRandomColor();
    }
          
}

function makeCells(cellNum) {
    for (let i = 0; i < cellNum; i++){
        const newCell = document.createElement('div');
        newCell.setAttribute("class", "cell");
        container.appendChild(newCell);
        const gridCells = document.querySelectorAll('.cell');
        gridCells.forEach(cell => cell.addEventListener('mouseover', mouseOver));

function mouseOver(e) {
    this.style.backgroundColor = "black";
  }
    }
}

function resetGrid(){ 
    let newSize = prompt("How large would you like the new grid to be?");
    if (isNaN(newSize)) {
        alert("Please enter a number");
    } else if (newSize < 1) {
        alert("Invalid number");
    } else {
        container.style.setProperty("grid-template-columns", "repeat("+newSize+", 1fr)");
        container.style.setProperty("grid-template-rows", "repeat("+newSize+", 1fr)");
        newSize=newSize*newSize; 
        while(container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        makeGrid(newSize);
        for(let j=0; j<cells.length; j++){
            cells[j].addEventListener('mouseover', mouseOver);
        }
    }
}





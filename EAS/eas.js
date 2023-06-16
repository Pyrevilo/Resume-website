let color = 'black';

//create grid
function createGrid (size) {
    let board = document.querySelector(".grid");
    //removes existing divs to be replaced when creating grid
    let squares = document.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    //sets board style to grid-template-columns/rows in css
    //this makes grid fit within constraints of field size (500px^2)
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "black";
        board.insertAdjacentElement("beforeend", square);
    }
}

createGrid(10);

//change grid size 
function changeSize(input) {
    if (input >=2 && input <=100) {
        createGrid(input);
    }
    else {
        console.log("Invalid grid size input")
    }
}

//sets color of drawing tool
function colorSquare() {
    //this refers to the div the event listener is attached to.
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}
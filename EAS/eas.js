let color = 'black';
let click = false;

//create grid
function createGrid (size) {
    let board = document.querySelector(".grid");
    //removes existing divs to be replaced when creating grid
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    //sets board style to grid-template-columns/rows in css
    //this makes grid fit within constraints of field size (500px^2)
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;
    
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = "white";
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
    if (click) {
        //this refers to the div the event listener is attached to.
        this.style.backgroundColor = color;
    }
}

//changes color of pen
function changeColor(choice) {
    color = choice;
}

//resets board
function resetBoard() {
    let board = document.querySelector(".grid");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

//only color in when holding down mouse 
document.querySelector("body").addEventListener('mousedown', () => {
    click = true;
})

document.querySelector("body").addEventListener('mouseup', () => {
    click = false;
})
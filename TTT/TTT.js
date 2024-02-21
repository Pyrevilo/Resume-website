//Try to use as little global var as possible (modules and factories)
//Store gameboard as an array inside an object. Players will also be objects. 
//An object will be needed to control the flow of the game



//create gameboard
function createGrid() {
    let board = document.querySelector(".gameboard");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    //board style
    board.style.gridTemplateColumns = 'repeat(3, 1fr)';
    board.style.gridTemplateRows = 'repeat(3, 1fr)';

    for (let i = 0; i < 9; i++) {
        let square = document.createElement('div');
        square.style.border = "black solid 2px";
        square.setAttribute('id', i);
        board.insertAdjacentElement("beforeend", square);
    }
}
createGrid();

const players = (name) => {
    const getName = () => name;
    const winningValues = [];
    const winner = false => {
        if (score == winner)
    }
}

/* winning values of grid id are:
0 1 2,
0 3 6,
0 4 8,
2 4 6,
2 5 8,
6 7 8,
1 4 7,
3 4 5



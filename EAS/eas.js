//selects grid div
const containerGrid = document.querySelector('.grid');
var pixel = document.getElementsByClassName('pixel');

var gridSize = 16;

for (let i =0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('segment');
    //grid.textContent = i;

    containerGrid.appendChild(grid);
    for (let k = 0; k <gridSize; k++) {
        const gridpixel = document.createElement('div');
        gridpixel.classList.add('pixel');
        //gridpixel.textContent = k;

        grid.appendChild(gridpixel);
    }
}

//changes color of pixel div when hovering mouse over
for (let i = 0; i <gridSize*gridSize; i++){
    pixel[i].addEventListener('mouseover', trail, false);
    function trail() {
        pixel[i].setAttribute("style", "background-color:lightblue");
    }
}

document.getElementById("refresh").onclick = function() {
    var gridresize = document.getElementById("userInput").value;
    console.log(gridresize);
    function createGrid() {
        for (let i =0; i < gridresize; i++) {
            const grid = document.createElement('div');
            grid.classList.add('segment');
            //grid.textContent = i;
        
            containerGrid.appendChild(grid);
            for (let k = 0; k <gridresize; k++) {
                const gridpixel = document.createElement('div');
                gridpixel.classList.add('pixel');
                //gridpixel.textContent = k;
        
                grid.appendChild(gridpixel);
            }
        }
    }
}
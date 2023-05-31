//selects grid div
const containerGrid = document.querySelector('.grid');


for (let i =0; i <= 16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('segment');
    //grid.textContent = i;

    containerGrid.appendChild(grid);
    for (let k = 0; k <=16; k++) {
        const gridpixel = document.createElement('div');
        gridpixel.classList.add('pixel');
        gridpixel.textContent = k;

        grid.appendChild(gridpixel);
    }
}
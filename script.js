const grid = document.querySelector('.grid');

createGrid = () => {
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    grid.appendChild(div); 
}
};

createGrid();

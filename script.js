const grid = document.querySelector('.grid');

createGrid = () => {
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div); 
}
};

createGrid();

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');

slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = `${val} x ${val}`;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

// Rainbow (RGB)

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

const rgb = document.querySelector('#rgb');

rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});

// Black

const black = document.querySelector('#black');

black.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

// Eraser

const eraser = document.querySelector('#eraser');

eraser.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'gray';
        })
    }
});

// Pick color

const chooseColor = document.querySelector('#color');

chooseColor.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});

// Clear all

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'gray';
    }
});



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

const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    screenVal.textContent = `${val} x ${val}`;

});



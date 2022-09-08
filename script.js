const grid = document.querySelector('.grid');

let color = 'black';
let size = 16;

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        grid.appendChild(line);
    
        for (let j = 0; j < size; j++) {
            const node = document.createElement('div');
            node.classList.add('node');
            node.setAttribute('style', `height: ${630 / size - 2}px; width: ${630 / size - 2}px;`);
            line.appendChild(node);
        }
    }

    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node) => {
        node.addEventListener('mousemove', () => {
            node.style.background = color;    
        });
    });
}

function resetGrid() {
    grid.innerHTML = '';
}

createGrid(size);

const buttonSize = document.querySelector('button.size');
buttonSize.addEventListener('click', () => {
    size = prompt("Please enter size of grid: ");
    if (size > 64 || size < 1) {
        while (size > 64 || size < 1) {
            size = prompt("Please enter size of grid (MORE THAN 1 AND LESS THAN 65): ");
        }
    }
    resetGrid();
    createGrid(size);
});

const buttonColor = document.querySelector('button.color');
buttonColor.addEventListener('click', () => {
    color = prompt("Please enter color: ");
});

const buttonClear = document.querySelector('button.clear');
buttonClear.addEventListener('click', () => {
    resetGrid();
    createGrid(size);
});
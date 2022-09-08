const grid = document.querySelector('.grid');

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
            node.style.background = 'black';    
        });
    });
}

function resetGrid() {
    grid.innerHTML = '';
}

createGrid(16);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let size = prompt("Please enter size of grid: ");
    if (size > 64 || size < 1) {
        while (size > 64 || size < 1) {
            size = prompt("Please enter size of grid (MORE THAN 1 AND LESS THAN 65): ");
        }
    }
    resetGrid();
    createGrid(size);
});
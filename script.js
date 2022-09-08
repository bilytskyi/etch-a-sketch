const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    grid.appendChild(line);

    for (let j = 0; j < 16; j++) {
        const node = document.createElement('div');
        node.classList.add('node');
        line.appendChild(node);
    }
}
function drawGrid(gridDiv, gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let i = 0; i < gridSize; i++) {
      let cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      rowDiv.appendChild(cellDiv);
    }

    gridDiv.appendChild(rowDiv);
  }
}

const wrapper = document.querySelector('.wrapper');
const grid = document.querySelector('.grid');

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  let gridSize = prompt('Enter grid size (btw 1 and 100)');
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    console.log('Invalid grid size');
    gridSize = 0;
  }
  grid.innerHTML = '';
  drawGrid(grid, gridSize);
});

drawGrid(grid);

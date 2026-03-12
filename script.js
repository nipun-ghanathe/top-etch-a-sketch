function drawGrid(gridDiv, gridSize = 16) {
  for (let i = 0; i < gridSize; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');

    for (let i = 0; i < gridSize; i++) {
      let cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.addEventListener('mouseenter', () => {
        const bgc =
          getComputedStyle(cellDiv).getPropertyValue('background-color');
        const colorParts = bgc.match(/[\d.]+/g).map(Number);
        let [r, g, b, a = 1] = colorParts;
        if (a !== 1)
          cellDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a + 0.1})`;
      });
      rowDiv.appendChild(cellDiv);
    }

    gridDiv.appendChild(rowDiv);
  }
}

const wrapper = document.querySelector('.wrapper');
const grid = document.querySelector('.grid');

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  let gridSize = prompt('Enter grid size (btw 1 and 100)');
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    console.log('Invalid grid size');
    gridSize = 0;
  }
  grid.innerHTML = '';
  drawGrid(grid, gridSize);
});

drawGrid(grid);

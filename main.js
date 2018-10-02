const game = (gameContainer = document.body) => {
  const generatePlayingField = (size = 4) => {
    return ``;
  };

  const field = generatePlayingField();

  const keys = {
    left: 37,
    up: 38,
    right: 39,
    down: 40,
  };

  const tableElement = gameContainer.querySelector('table');
  const { cellIndex, parentElement: { rowIndex } } = tableElement.querySelector('.table-active');
  let active = { x: cellIndex, y: rowIndex };
  
  const keyHandler = ({ keyCode }) => {
    switch (keyCode) {
      case keys.right: {
        const activeElement = tableElement.rows[active.y].cells[active.x];
        const newX = active.x - 1;
        const newActiveElement = tableElement.rows[active.y].cells[newX];
        if (!newActiveElement) {
          return;
        }
        activeElement.classList.remove('table-active');
        newActiveElement.classList.add('table-active');
        activeElement.textContent = newActiveElement.textContent;
        newActiveElement.textContent = '';
        active.x = newX;
        break;
      }
      case keys.down: {
        const activeElement = tableElement.rows[active.y].cells[active.x];
        const newY = active.y - 1;
        const newActiveElement = (tableElement.rows[newY] || { cells: {} }).cells[active.x];
        if (!newActiveElement) {
          return;
        }
        activeElement.classList.remove('table-active');
        newActiveElement.classList.add('table-active');
        activeElement.textContent = newActiveElement.textContent;
        newActiveElement.textContent = '';
        active.y = newY;
        break;
      }
      case keys.left: {
        const activeElement = tableElement.rows[active.y].cells[active.x];
        const newX = active.x + 1;
        const newActiveElement = tableElement.rows[active.y].cells[newX];
        if (!newActiveElement) {
          return;
        }
        activeElement.classList.remove('table-active');
        newActiveElement.classList.add('table-active');
        activeElement.textContent = newActiveElement.textContent;
        newActiveElement.textContent = '';
        active.x = newX;
        break;
      }
      case keys.up: {
        const activeElement = tableElement.rows[active.y].cells[active.x];
        const newY = active.y + 1;
        const newActiveElement = (tableElement.rows[newY] || { cells: {} }).cells[active.x];
        if (!newActiveElement) {
          return;
        }
        activeElement.classList.remove('table-active');
        newActiveElement.classList.add('table-active');
        activeElement.textContent = newActiveElement.textContent;
        newActiveElement.textContent = '';
        active.y = newY;
        break;
      }
    }
  };

  window.addEventListener('keydown', keyHandler);
};

game(document.querySelector('.game'));
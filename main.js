const app = () => {
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

  const keyHandler = ({ keyCode }) => {
    switch (keyCode) {
      case keys.right:
        console.log('right');
        break;
      case keys.down:
        console.log('down');
        break;
      case keys.left:
        console.log('left');
        break;
      case keys.up:
        console.log('up');
        break;
    }
  };

  window.addEventListener('keydown', keyHandler);
};

app();
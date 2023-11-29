// Number of dots you want
const numDots = 1000;

for (let i = 0; i < numDots; i++) {
    createDot();
}

function createDot() {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.top = `${Math.random() * 100}vh`;
    dot.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(dot);

    // Listen for the animation iteration and reset dot position
    dot.addEventListener('animationiteration', () => {
      dot.style.top = `${Math.random() * 100}vh`;
      dot.style.left = `${Math.random() * 100}vw`;
    });
  }
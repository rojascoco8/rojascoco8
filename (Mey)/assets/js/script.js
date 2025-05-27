document.addEventListener('DOMContentLoaded', () => {
    const cortinaIzquierda = document.querySelector('.cortina-izquierda');
    const cortinaDerecha = document.querySelector('.cortina-derecha');
    const contenedorCortinas = document.getElementById('contenedor-cortinas');

    setTimeout(() => {
        cortinaIzquierda.classList.add('abierta-izquierda');
        cortinaDerecha.classList.add('abierta-derecha');

        setTimeout(() => {
            if (contenedorCortinas) {
                contenedorCortinas.remove();
            }
        }, 1000);
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('body'); // El contenedor donde aparecerá el confeti
    const numConfetti = 100; // Número de trozos de confeti
  
    for (let i = 0; i < numConfetti; i++) {
      createConfetti();
    }
  
    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
  
      // Generar propiedades aleatorias para cada trozo
      const size = Math.random() * 10 + 5; // Tamaño entre 5 y 15 píxeles
      const xPos = Math.random() * container.offsetWidth; // Posición horizontal aleatoria
      const yPos = Math.random() * -100; // Posición vertical inicial (fuera de la pantalla)
      const rotation = Math.random() * 360; // Rotación inicial aleatoria
      const delay = Math.random() * 3; // Retraso para la animación (para un efecto más escalonado)
      const color = getRandomColor();
  
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.backgroundColor = color;
      confetti.style.left = `${xPos}px`;
      confetti.style.top = `${yPos}px`;
      confetti.style.transform = `rotate(${rotation}deg)`;
      confetti.style.animationDelay = `${delay}s`;
  
      container.appendChild(confetti);
    }
  
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
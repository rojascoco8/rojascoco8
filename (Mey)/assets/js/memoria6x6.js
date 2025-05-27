let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 80;
let timerInicial = 80;
let tiempoRegresivoId = null;
let bloqueoTemporal = false;
let winAudio = new Audio('./assets/sonidos/win.wav');
let loseAudio = new Audio('./assets/sonidos/lose.wav');
let clickAudio = new Audio('./assets/sonidos/click.wav');
let rigthAudio = new Audio('./assets/sonidos/rigth.wav');
let wrongAudio =  new Audio('./assets/sonidos/wrong.wav');
// Elementos del DOM
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');
const botonReiniciar = document.getElementById('reiniciar-juego');

// Crear y mezclar las imágenes
let imagenes = [
    'assets/images/1.1.png', 'assets/images/1.1.png',
    'assets/images/2.2.png', 'assets/images/2.2.png',
    'assets/images/3.3.png', 'assets/images/3.3.png',
    'assets/images/4.4.png', 'assets/images/4.4.png',
    'assets/images/5.5.png', 'assets/images/5.5.png',
    'assets/images/6.6.png', 'assets/images/6.6.png',
    'assets/images/7.7.png', 'assets/images/7.7.png',
    'assets/images/8.8.png', 'assets/images/8.8.png',
    'assets/images/9.png',   'assets/images/9.png',
    'assets/images/10.png', 'assets/images/10.png',
    'assets/images/11.png', 'assets/images/11.png',
    'assets/images/12.png', 'assets/images/12.png',
    'assets/images/13.png', 'assets/images/13.png',
    'assets/images/14.png', 'assets/images/14.png',
    'assets/images/15.png', 'assets/images/15.png',
    'assets/images/16.png', 'assets/images/16.png',
    'assets/images/17.png', 'assets/images/17.png',
    'assets/images/18.png', 'assets/images/18.png'
];
imagenes = imagenes.sort(() => Math.random() - 0.5);

// Temporizador
function contarTiempo() {
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;

        if (timer === 0) {
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            loseAudio.play();
        }
    }, 1000);
}

function reiniciarJuego() {
    // Restablecer variables del juego
    tarjetasDestapadas = 0;
    tarjeta1 = null;
    tarjeta2 = null;
    primerResultado = null;
    segundoResultado = null;
    movimientos = 0;
    aciertos = 0;
    temporizador = false;
    timer = timerInicial; // Restablecer el tiempo inicial
    bloqueoTemporal = false;

    // Reiniciar la visualización
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
    mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;

    // Reiniciar las cartas
    imagenes = imagenes.sort(() => Math.random() - 0.5); // Mezclar imágenes
    for (let i = 0; i <= 35; i++) {
        let boton = document.getElementById(i.toString());
        boton.innerHTML = '';
        boton.disabled = false;
    }

    // Reiniciar el temporizador si estaba activo
    if (tiempoRegresivoId) {
        clearInterval(tiempoRegresivoId);
    }
}

// Bloquear todas las cartas
function bloquearTarjetas() {
    for (let i = 0; i <= 35; i++) {
        let boton = document.getElementById(i.toString());
        boton.disabled = true;
    }
}

// Función principal
function destapar(id) {
    if (bloqueoTemporal) return; // Evita clics durante animación

    const boton = document.getElementById(id.toString());

    // Prevenir doble clic en la misma carta
    if (boton.disabled || tarjeta1 === boton) return;

    if (!temporizador) {
        contarTiempo();
        temporizador = true;
    }

    boton.innerHTML = `<img src="${imagenes[id]}" alt="Tarjeta">`; // Mostrar imagen
    boton.disabled = true;
    tarjetasDestapadas++;

    if (tarjetasDestapadas === 1) {
        tarjeta1 = boton;
        primerResultado = imagenes[id];
        clickAudio.play();

    } else if (tarjetasDestapadas === 2) {
        tarjeta2 = boton;
        segundoResultado = imagenes[id];
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        bloqueoTemporal = true; // Bloquea nuevos clics

        if (primerResultado === segundoResultado) {
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            rigthAudio.play();
            tarjeta1 = null;
            tarjeta2 = null;
            bloqueoTemporal = false;

            if (aciertos === 18) {
                winAudio.play();
                clearInterval(tiempoRegresivoId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 🤠🤗`;
                mostrarTiempo.innerHTML = `¡Increíble! Solo demoraste ${timerInicial - timer} segundos 🥳🥳`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🥳😱`;
            
                // === GUARDAR ESTADÍSTICAS ===
                let partidas = parseInt(localStorage.getItem("partidas_jugadas")) || 0;
                let aciertosTotales = parseInt(localStorage.getItem("aciertos_totales")) || 0;
                let intentosTotales = parseInt(localStorage.getItem("intentos_totales")) || 0;
                let tiempoTotal = parseInt(localStorage.getItem("tiempo_total")) || 0;
                let nivelAlcanzado = parseInt(localStorage.getItem("nivel_mas_alto")) || 1;
            
                let intentos = movimientos; // Cada par jugado es un intento
                let tiempoPartida = timerInicial - timer;
            
                localStorage.setItem("partidas_jugadas", partidas + 1);
                localStorage.setItem("aciertos_totales", aciertosTotales + aciertos);
                localStorage.setItem("intentos_totales", intentosTotales + intentos);
                localStorage.setItem("tiempo_total", tiempoTotal + tiempoPartida);
            
                if (nivelAlcanzado < 2) {
                    localStorage.setItem("nivel_mas_alto", 2); // Este es el nivel 2 (6x6)
                }
            }
            

        } else {
            wrongAudio.play();
            // No coinciden: ocultarlas después de un pequeño delay
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
                tarjeta1 = null;
                tarjeta2 = null;
                bloqueoTemporal = false;
            }, 800);
        }
    }
}

// Asignar eventos a los botones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i <= 35; i++) {
        const boton = document.getElementById(i.toString());
        boton.addEventListener("click", () => destapar(i));
        botonReiniciar.addEventListener('click', reiniciarJuego);
    }
});
function mostrarProgreso() {
    let partidas = parseInt(localStorage.getItem("partidas_jugadas")) || 0;
    let aciertosTotales = parseInt(localStorage.getItem("aciertos_totales")) || 0;
    let intentosTotales = parseInt(localStorage.getItem("intentos_totales")) || 0;
    let tiempoTotal = parseInt(localStorage.getItem("tiempo_total")) || 0;
    let nivelAlcanzado = parseInt(localStorage.getItem("nivel_mas_alto")) || 1;
  
    let porcentajeAciertos = intentosTotales > 0
      ? ((aciertosTotales / intentosTotales) * 100).toFixed(1)
      : 0;
  
    let tiempoPromedio = partidas > 0
      ? (tiempoTotal / partidas).toFixed(1)
      : 0;
  
    const progresoHTML = `
      <li>Partidas jugadas: ${partidas}</li>
      <li>Porcentaje de aciertos: ${porcentajeAciertos}%</li>
      <li>Tiempo promedio por partida: ${tiempoPromedio} segundos</li>
      <li>Nivel más alto alcanzado: ${nivelAlcanzado}</li>
    `;
  
    const lista = document.getElementById("lista-progreso");
    if (lista) lista.innerHTML = progresoHTML;
  }
  
  function reiniciarProgreso() {
    localStorage.removeItem("partidas_jugadas");
    localStorage.removeItem("aciertos_totales");
    localStorage.removeItem("intentos_totales");
    localStorage.removeItem("tiempo_total");
    localStorage.removeItem("nivel_mas_alto");
    mostrarProgreso();
    alert("📉 Estadísticas reiniciadas con éxito.");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    mostrarProgreso();
    const botonReiniciar = document.getElementById("reiniciar-progreso");
    if (botonReiniciar) {
      botonReiniciar.addEventListener("click", reiniciarProgreso);
    }
  });
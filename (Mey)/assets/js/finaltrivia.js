const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const nombreJugador = document.querySelector("#nombre-jugador");
const puntajeFinalElement = document.querySelector("#puntaje-final");
const totalAcertadasElement = document.querySelector("#total-acertadas");
const totalNoAcertadasElement = document.querySelector("#total-no-acertadas");
const btnComenar = document.querySelector("#btn-comenzar");
const mensajeResultado = document.createElement("h2"); // Creamos un nuevo elemento h2 para el mensaje

nombre.innerHTML = localStorage.getItem("nombre");
nombreJugador.innerHTML = localStorage.getItem("nombre");
const puntajeTotal = parseInt(localStorage.getItem("puntaje-total")) || 0;
txtPuntaje.innerHTML = puntajeTotal;
puntajeFinalElement.innerHTML = puntajeTotal + " Puntos";

// Asumimos 5 preguntas por categoría y 6 categorías, dando un total de 30 preguntas
const totalPreguntas = 30;
const correctas = puntajeTotal / 100;
const incorrectas = totalPreguntas - correctas;

totalAcertadasElement.innerHTML = correctas;
totalNoAcertadasElement.innerHTML = incorrectas;

// Calcular el porcentaje de respuestas correctas
const porcentajeCorrectas = (correctas / totalPreguntas) * 100;

// Determinar si el juego fue ganado o perdido
if (porcentajeCorrectas >= 80) {
    mensajeResultado.innerHTML = "¡Juego Ganado!";
    mensajeResultado.classList.add("ganado"); // Puedes añadir estilos CSS para esta clase
} else {
    mensajeResultado.innerHTML = "Juego Perdido";
    mensajeResultado.classList.add("perdido"); // Puedes añadir estilos CSS para esta clase
}

// Insertar el mensaje de resultado antes del botón "Comenzar de Nuevo"
const mainElement = document.querySelector(".final");
mainElement.insertBefore(mensajeResultado, btnComenar);

btnComenar.addEventListener("click", () => {
    // Limpiar el puntaje total para un nuevo juego
    localStorage.removeItem("puntaje-total");
    localStorage.removeItem("categorias-jugadas"); // O cualquier otro estado del juego que quieras resetear
    location.href = "menutrivia.html"; // Redirigir al menú para empezar de nuevo
});
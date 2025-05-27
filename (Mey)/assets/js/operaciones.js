// Declaracion de las variables 
let operandoa, operandob, operacion;
let puntaje = 0;
let ronda = 1;
let tiempo = 10;
let intervaloTiempo;
let respondido = false;

// Funcion para cargar la pagina web
window.onload = function () {
  nuevaRonda(); // Inicia la primera ronda del juego

// Se crea la 'nuevaRonda' para que se ejecute
  document.getElementById("btnNuevaRonda").onclick = nuevaRonda;
  
  for (let i = 1; i <= 3; i++) {
      // La funcion para las operaciones (con ids 'op1', 'op2', 'op3')
      document.getElementById("op" + i).onclick = function () {
          //función para manejar el evento de clic en cada botón
          seleccionarRespuesta(parseInt(this.textContent));
         
      };
  }
};

 // Crea una nueva ronda del juego
function nuevaRonda() {
  generarOperacion(); 
  generarRespuestas(); 
  // Se encarga de actualizar el elemento html con el id
  document.getElementById("ronda").textContent = ronda; 
  ronda++; 
  resetearTiempo(); //tiempo a su valor inicial
  iniciarTemporizador(); 
  respondido = false; //sirve para inicializar la variable de una nueva respuesta

  // Habilitar todos los botones y resetear su color
  document.querySelectorAll('.opcion').forEach(boton => {
      // le da color a los botones de respuesta, falso verdadero
      boton.disabled = false; 
      // Restablece el color de fondo del botón
      boton.style.backgroundColor = ""; });
}
//Genera Operacion mate aleatoria
function generarOperacion() {
  //elementos operaciones posibles
  const operaciones = ["+", "-", "*", "/"]; 

  //Se crea aleatoriamente un tipo de operación
  operacion = operaciones[Math.floor(Math.random() * operaciones.length)];
  
// Genera un número entero aleatorio entre 1 y 10 para el primer operando y segundo operando
  operandoa = Math.floor(Math.random() * 10) + 1; 
  operandob = Math.floor(Math.random() * 10) + 1; 

  // funcion para que la divison de resultados enteros
  if (operacion === "/") {
      operandoa = operandoa * operandob; 
  }
// Actualiza html para mostrar la operación generada.
  document.getElementById("pregunta").textContent = `${operandoa} ${operacion} ${operandob} = ?`;
  
//Muestra la operacion para el usuario
  let textoOperacion = "";
  switch (operacion) {
      case "+": textoOperacion = "Suma."; break;
      case "-": textoOperacion = "Resta."; break;
      case "*": textoOperacion = "Multiplicación."; break;
      case "/": textoOperacion = "División."; break;
  }
  //Se encarga de indicar el tipo de operación actual
  document.getElementById("tipoOperacion").innerHTML = `Juego de <strong>${textoOperacion}</strong>`;
}
//Retorna la operacion es si +,-,*,/
function calcularResultado() {
  switch (operacion) {
      case "+": return operandoa + operandob; 
      case "-": return operandoa - operandob; 
      case "*": return operandoa * operandob; 
      case "/": return operandoa / operandob; 
  }
}
//generar las opciones de respuesta, incluyendo la correcta y dos incorrectas.
function generarRespuestas() {
  const correcta = calcularResultado(); 
  let respuestas = [correcta]; // Inicializa un array con la respuesta correcta.

// Genera respuestas incorrectas hasta tener tres opciones en total.
  while (respuestas.length < 3) {
      let error = correcta + Math.floor(Math.random() * 7 - 3); //respuesta engañosa
      if (error !== correcta && !respuestas.includes(error) && error >= 0) {
          respuestas.push(error); // Agrega la respuesta incorrecta al array.
      }
  }
 //crea aleatoriamente el orden de las respuestas
  respuestas.sort(() => Math.random() - 0.5);
 
//da los tres botones de opción.
  for (let i = 1; i <= 3; i++) {
      document.getElementById("op" + i).textContent = respuestas[i - 1];
  }
}
//Seleccion de respuesta 
function seleccionarRespuesta(valorSeleccionado) {
  if (respondido) return; 
  respondido = true; 

  const correcta = calcularResultado(); 
  const mensaje = document.getElementById("mensajeResultado"); // Obtiene el elemento del html para mostrar el mensaje de resultado
  clearInterval(intervaloTiempo); 

  const botonesOpcion = document.querySelectorAll('.opcion'); 
  const botonSeleccionado = Array.from(botonesOpcion).find(
      (boton) => parseInt(boton.textContent) === valorSeleccionado
  );

  //Se encarga de deshabilitar los botones
  botonesOpcion.forEach(boton => {
      boton.disabled = true; 
  });
// Muestra el mensaje de "¡Correcto!"
  if (valorSeleccionado === correcta) {
      mensaje.textContent = "¡Correcto!";
      mensaje.style.color = "green"; 
      if (botonSeleccionado) {
          botonSeleccionado.style.backgroundColor = "#81c784"; // Cambia el color de fondo del botón seleccionado a verde claro
      }
      puntaje++; // Incrementa el puntaje del jugador.
  } else {
      // Si la respuesta seleccionada es incorrecta.
      mensaje.textContent = `Incorrecto. La respuesta correcta era: ${correcta}`; // Muestra el mensaje de "¡Incorrecto!" y la respuesta correcta.
      mensaje.style.color = "red"; 
      if (botonSeleccionado) {
          botonSeleccionado.style.backgroundColor = "#e57373"; 
      }

      // Resaltar la respuesta correcta
      botonesOpcion.forEach(boton => {
          if (parseInt(boton.textContent) === correcta) {
              boton.style.backgroundColor = "#81c784"; 
          }
      });
  }
// Actualiza 'puntaje' para mostrar el puntaje actual
  document.getElementById("puntaje").textContent = puntaje;
// Limpia el mensaje de resultado.
  setTimeout(() => {
      mensaje.textContent = "";
      nuevaRonda(); // Se inicia automáticamente una nueva ronda
  }, 2000);
}

function iniciarTemporizador() {
  tiempo = 10; 
  document.getElementById("tiempo").textContent = tiempo; 
  document.getElementById("tiempo").style.color = ""; // Restablece el color del tiempo
  document.getElementById("tiempo").style.fontWeight = ""; // Restablece el peso de la fuente del tiempo
  clearInterval(intervaloTiempo); // Limpia cualquier intervalo de tiempo anterior para evitar conflictos
  intervaloTiempo = setInterval(() => {
      tiempo--; // Decrementa el tiempo restante
      document.getElementById("tiempo").textContent = tiempo; // Actualiza la visualización del tiempo

      // Alerta visual de tiempo bajo
      if (tiempo <= 3) {
          // Si quedan 3 segundos o menos.
          document.getElementById("tiempo").style.color = "red"; // Cambia el color del tiempo a rojo para alertar al jugador
          document.getElementById("tiempo").style.fontWeight = "bold"; // Pone el tiempo en negrita
      }
// Si el tiempo se agota.
      if (tiempo === 0) {
          clearInterval(intervaloTiempo);
          document.querySelectorAll('.opcion').forEach(boton => {
              boton.disabled = true; // Deshabilita todos los botones de opción cuando el tiempo se agota
          });
          // Si el jugador no respondió antes de que se agotara el tiempo
          if (!respondido) {
              respondido = true; //se quedo sin tiempo
              const correcta = calcularResultado(); //da la respuesta correcta
              const mensaje = document.getElementById("mensajeResultado"); // Obtiene el mensaje
              mensaje.textContent = `Tiempo agotado. La respuesta correcta era: ${correcta}`; // Muestra el mensaje de tiempo agotado y la respuesta que es
              mensaje.style.color = "red"; 
              // Resaltar la respuesta correcta
              document.querySelectorAll('.opcion').forEach(boton => {
                  if (parseInt(boton.textContent) === correcta) {
                      boton.style.backgroundColor = "#81c784"; // Resalta la respuesta correcta en verde.
                  }
              });

              setTimeout(() => {
                  // Después de 2 segundos se limpia el mensaje.
                  mensaje.textContent = "";
                  // Los botones se habilitan y el color se resetea en nueva ronda
                  nuevaRonda(); 
              }, 2000);
          }
      }
  }, 1000);
}
//restablecer el tiempo a su valor inicial y limpiar cualquier intervalo activo
function resetearTiempo() {
  clearInterval(intervaloTiempo); //Se encarga de detener el temporizador si está corriendo
  tiempo = 10; // Restablece los 10s
  document.getElementById("tiempo").textContent = tiempo; // Actualiza el tiempo
  document.getElementById("tiempo").style.color = ""; // Restablece el color del tiempo
  document.getElementById("tiempo").style.fontWeight = ""; // Restablece la fuente del tiempo
}
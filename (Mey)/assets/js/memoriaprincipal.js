// Evento que se ejecuta cuando la página se ha cargado completamente
window.addEventListener("load", () => {
    // Obtiene el elemento con el id "loader"
    const loader = document.getElementById("loader");
    if (loader) {
      // Si el loader existe, cambia su opacidad a 0 (lo hace invisible)
      loader.style.opacity = "0";
      // Desactiva la interacción con el loader (no podrá ser clickeado)
      loader.style.pointerEvents = "none";
      // Después de 500ms, oculta el loader cambiando su estilo a "display: none"
      setTimeout(() => loader.style.display = "none", 500);
    }
  });
  
  // Añade un evento de click a todos los elementos con la clase "game-option"
  document.querySelectorAll(".game-option").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Previene la acción predeterminada del enlace (cambiar de página)
      document.body.classList.add("fade-out"); // Agrega una clase para animar la transición de salida
      // Después de 500ms, redirige a la URL del enlace
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  });
  
  // Obtiene el nombre del jugador desde el localStorage o solicita uno nuevo
  const nombre = localStorage.getItem("jugador") || prompt("¿Cuál es tu nombre?");
  // Almacena el nombre en el localStorage para usarlo en futuras visitas
  localStorage.setItem("jugador", nombre);
  // Muestra un mensaje de bienvenida en el encabezado h1
  document.querySelector("h1").textContent = `¡Bienvenido, ${nombre}, a los Juegos de Memoria!`;
  
// Añade un evento de click al botón para cambiar el tema y el texto del botón
document.getElementById("toggle-theme").addEventListener("click", () => {
    // Alterna entre el modo oscuro y el modo claro al agregar o quitar la clase "dark-mode" al cuerpo
    document.body.classList.toggle("dark-mode");
  
    // Obtiene el botón con id "toggle-theme" y cambia su texto según el estado del tema
    const button = document.getElementById("toggle-theme");
    button.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Modo Claro" // Si el cuerpo tiene la clase "dark-mode", cambia el texto a "Modo Claro"
      : "🌙 Modo Oscuro"; // Si no, cambia el texto a "Modo Oscuro"
  });
  
  
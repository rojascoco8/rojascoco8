//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Cuál es el planeta más grande de nuestro sistema solar?",
        opcionA:"Tierra",
        opcionB:"Marte",
        opcionC:"Jupiter",
        opcionD:"Saturno",
        correcta:"c"
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Quién escribió 'Cien años de soledad'?",
        opcionA:"Gabriel García Márquez",
        opcionB:"Julio Cortázar",
        opcionC:"Isabel Allende",
        opcionD:"Mario Vargas Llosa",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿Cuál es el río más largo del mundo?",
        opcionA:"Amazonas",
        opcionB:"Nilo",
        opcionC:"Paraná",
        opcionD:"Misisipi",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Cuál es el componente principal del aire que respiramos?",
        opcionA:"Nitrogeno",
        opcionB:"Oxígeno",
        opcionC:"Dióxido de carbono",
        opcionD:"Hidrógeno",
        correcta:"a"
    },
    {
        id:5,
        categoria:"general",
        titulo:"¿Quién pintó la Mona Lisa?",
        opcionA:"Vincent van Gogh",
        opcionB:"Pablo Picasso",
        opcionC:"Leonardo da Vinci",
        opcionD:"Miguel Ángel",
        correcta:"c"
    },
    {
        id: 6,
        categoria: "musica",
        titulo: "¿Quién es conocido como el pimer Rey del Pop?",
        opcionA: "Elvis Presley",
        opcionB: "Michael Jackson",
        opcionC: "Madonna",
        opcionD: "Prince",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "¿Cuál es el género musical más popular en todo el mundo?",
        opcionA: "Rock",
        opcionB: "Electrónica",
        opcionC: "Rap",
        opcionD: "Pop",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "¿Cuál fue el álbum más vendido de todos los tiempos?",
        opcionA: "Thriller de Michael Jackson",
        opcionB: "The Dark Side of the Moon de Pink Floyd",
        opcionC: "Back in Black de AC/DC1980",
        opcionD: "Their Greatest Hits (1971-1975) de Eagles",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "¿Quién es el famoso guitarrista de la banda Queen?",
        opcionA: "John Lennon",
        opcionB: "Jimi Hendrix",
        opcionC: "Brian May",
        opcionD: "Eric Clapton",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "¿Qué género musical se originó en Jamaica a finales de la década de 1960?",
        opcionA: "Reggae",
        opcionB: "Ska",
        opcionC: "Rocksteady",
        opcionD: "Calipso",
        correcta: "a"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "¿Cuántos anillos olímpicos hay en la bandera olímpica?",
        opcionA: "4",
        opcionB: "5",
        opcionC: "6",
        opcionD: "7",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "¿Cuál es el país de origen de la artista del tenis Serena Williams?",
        opcionA: "Estados Unidos",
        opcionB: "Francia",
        opcionC: "España",
        opcionD: "Australia",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "¿Cuántos jugadores conforman un equipo de fútbol estándar en el campo durante un partido?",
        opcionA: "8",
        opcionB: "10",
        opcionC: "11",
        opcionD: "12",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "¿Cuál es el deporte de motor más popular del mundo?",
        opcionA: "MotoGP",
        opcionB: "Fórmula 1",
        opcionC: "NASCAR",
        opcionD: "Rally",
        correcta: "b"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "¿En qué deporte se compite por la Copa Davis?",
        opcionA: "Fútbol",
        opcionB: "Tenis",
        opcionC: "Golf",
        opcionD: "Balonmano",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "programacion",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },
    {
        id: 18,
        categoria: "programacion",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "programacion",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "juegos",
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "juegos",
        titulo: "¿En qué año se lanzó el juego 'The Legend of Zelda: Ocarina of Time'?",
        opcionA: "1996",
        opcionB: "1998",
        opcionC: "2000",
        opcionD: "2002",
        correcta: "b"
    },
    {
        id: 23,
        categoria: "juegos",
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "juegos",
        titulo: "¿Qué tipo de juego es League of Legends?",
        opcionA: "Shooter en primera persona (FPS)",
        opcionB: " Juego de rol (RPG)",
        opcionC: "Estrategia en tiempo real (RTS)",
        opcionD: "Arena de batalla multijugador en línea (MOBA)",
        correcta: "d"
    },
    {
        id: 25,
        categoria: "juegos",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre del león protagonista en 'El Rey León'?",
        opcionA: "Simba",
        opcionB: "Mufasa",
        opcionC: "Scar",
        opcionD: "Timón",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "¿Qué juguete es el protagonista de la película 'Toy Story'?",
        opcionA: "Buzz Lightyear",
        opcionB: "Woody",
        opcionC: "Slinky",
        opcionD: "Mr. Potato Head",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "¿Cuál fue la película más taquillera a nivel mundial en 2023?",
        opcionA: "Barbie",
        opcionB: "Oppenheimer",
        opcionC: " The Super Mario Bros. Movie",
        opcionD: "Avatar: The Way of Water",
        correcta: "d"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "¿Quién es el monstruo protagonista en 'Monsters, Inc.'?",
        opcionA: "Sulley",
        opcionB: "Mike Wazowski",
        opcionC: "Randall",
        opcionD: "Boo",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "¿Qué estudio produjo la película animada Spider-Man: Across the Spider-Verse?",
        opcionA: "Walt Disney Pictures",
        opcionB: "Pixar Animation Studios",
        opcionC: "Sony Pictures Animation",
        opcionD: "DreamWorks Animation",
        correcta: "c"
    }
]

// tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");
const txtTemporizador = document.querySelector("#temporizador"); // Se agrega temporizador 

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

// Recupero el puntaje en caso que ya esté jugando
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) {
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else {
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

// Temporizador
let tiempoMaximo = 20;
let tiempoRestante = tiempoMaximo;
let intervaloTemporizador;

function iniciarTemporizador() {
    clearInterval(intervaloTemporizador); // por si había uno corriendo
    tiempoRestante = tiempoMaximo;
    txtTemporizador.innerHTML = tiempoRestante;

    intervaloTemporizador = setInterval(() => {
        tiempoRestante--;
        txtTemporizador.innerHTML = tiempoRestante;

        if (tiempoRestante <= 0) {
            clearInterval(intervaloTemporizador);
            manejarTiempoAgotado();
        }
    }, 1000);
}

function manejarTiempoAgotado() {
    const botonesRespuesta = document.querySelectorAll(".opcion");

    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });

    // mostrar la correcta
    const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
    correcta.classList.add("correcta");

    // OPCIONAL: avanzar a la siguiente pregunta tras 2 segundos
    setTimeout(() => {
        btnSiguiente.click();
    }, 2000);
}

function cargarSiguientePregunta(num) {
    // tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    const botonesRespuesta = document.querySelectorAll(".opcion");

    // limpio eventListeners y clases
    botonesRespuesta.forEach(opcion => {
        opcion.replaceWith(opcion.cloneNode(true));
    });

    const nuevosBotones = document.querySelectorAll(".opcion");
    nuevosBotones.forEach(opcion => {
        opcion.classList.remove("correcta", "incorrecta", "no-events");
        opcion.addEventListener("click", agregarEventListenerBoton);
    });

    txtPuntaje.classList.remove("efecto");

    iniciarTemporizador(); // NUEVO
}

function agregarEventListenerBoton(e) {
    clearInterval(intervaloTemporizador); // NUEVO

    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta");
        puntajeTotal += 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    } else {
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events");
    });
}

cargarSiguientePregunta(numPreguntaActual);

// botón siguiente
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    clearInterval(intervaloTemporizador); // Para evitar que el cronómetro se dispare al hacer clic rápido

    numPreguntaActual++;
    if (numPreguntaActual <= 4) {
        cargarSiguientePregunta(numPreguntaActual);
    } else {
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));

        if (parseInt(categoriasJugadasLS.length) < 6) {
            location.href = "menutrivia.html";
        } else {
            location.href = "finaltrivia.html";
        }
    }
});
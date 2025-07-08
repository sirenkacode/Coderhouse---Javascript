const preguntas = [
  {
    texto: "¿Cuál de estas cualidades valorás más?",
    opciones: [
      { texto: "Valentía", casa: "Gryffindor" },
      { texto: "Ambición", casa: "Slytherin" },
      { texto: "Sabiduría", casa: "Ravenclaw" },
      { texto: "Lealtad", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "En un examen difícil, vos...",
    opciones: [
      { texto: "Confiás en lo que sabés", casa: "Gryffindor" },
      { texto: "Buscás una manera de aprobar a toda costa", casa: "Slytherin" },
      { texto: "Estudiaste todo con anticipación", casa: "Ravenclaw" },
      { texto: "Te ofrecés a ayudar a un compañero", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "Elegí una criatura mágica:",
    opciones: [
      { texto: "Hipogrifo", casa: "Gryffindor" },
      { texto: "Basilisco", casa: "Slytherin" },
      { texto: "Fénix", casa: "Ravenclaw" },
      { texto: "Niffler", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Qué materia te interesa más en Hogwarts?",
    opciones: [
      { texto: "Defensa contra las artes oscuras", casa: "Gryffindor" },
      { texto: "Pociones", casa: "Slytherin" },
      { texto: "Adivinación", casa: "Ravenclaw" },
      { texto: "Cuidado de criaturas mágicas", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "En una discusión con un amigo, vos...",
    opciones: [
      { texto: "Defendés tu punto sin dudar", casa: "Gryffindor" },
      { texto: "Buscás manipular sutilmente la situación", casa: "Slytherin" },
      { texto: "Analizás lógicamente ambos lados", casa: "Ravenclaw" },
      { texto: "Tratás de evitar el conflicto", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "Tu lugar ideal sería:",
    opciones: [
      { texto: "Una torre con vistas", casa: "Ravenclaw" },
      { texto: "Una cueva secreta", casa: "Slytherin" },
      { texto: "Un jardín soleado", casa: "Hufflepuff" },
      { texto: "Un castillo antiguo", casa: "Gryffindor" }
    ]
  },
  {
    texto: "Elegí un color:",
    opciones: [
      { texto: "Rojo", casa: "Gryffindor" },
      { texto: "Verde", casa: "Slytherin" },
      { texto: "Azul", casa: "Ravenclaw" },
      { texto: "Amarillo", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Qué cualidad es más peligrosa?",
    opciones: [
      { texto: "Temeridad", casa: "Gryffindor" },
      { texto: "Crueldad", casa: "Slytherin" },
      { texto: "Arrogancia", casa: "Ravenclaw" },
      { texto: "Ingenuidad", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "Elegí una palabra:",
    opciones: [
      { texto: "Honor", casa: "Gryffindor" },
      { texto: "Poder", casa: "Slytherin" },
      { texto: "Conocimiento", casa: "Ravenclaw" },
      { texto: "Amistad", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "Si fueras un objeto mágico, serías...",
    opciones: [
      { texto: "Una espada mágica", casa: "Gryffindor" },
      { texto: "Un giratiempo", casa: "Slytherin" },
      { texto: "Un libro encantado", casa: "Ravenclaw" },
      { texto: "Una capa invisible", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Cómo reaccionás ante el peligro?",
    opciones: [
      { texto: "Actuás sin pensarlo", casa: "Gryffindor" },
      { texto: "Planeás cómo salir ileso", casa: "Slytherin" },
      { texto: "Buscás entender lo que pasa", casa: "Ravenclaw" },
      { texto: "Protegés a los demás", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Qué te molesta más?",
    opciones: [
      { texto: "La injusticia", casa: "Gryffindor" },
      { texto: "La mediocridad", casa: "Slytherin" },
      { texto: "La ignorancia", casa: "Ravenclaw" },
      { texto: "La crueldad", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Qué hacés en tu tiempo libre?",
    opciones: [
      { texto: "Entrenás o hacés deportes", casa: "Gryffindor" },
      { texto: "Pensás en tus objetivos", casa: "Slytherin" },
      { texto: "Leés o investigás", casa: "Ravenclaw" },
      { texto: "Ayudás a tus amigos", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "En una aventura grupal, vos...",
    opciones: [
      { texto: "Tomás la delantera", casa: "Gryffindor" },
      { texto: "Planeás la estrategia", casa: "Slytherin" },
      { texto: "Sos quien tiene la información", casa: "Ravenclaw" },
      { texto: "Unís al grupo y calmás los ánimos", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Cuál es tu lema?",
    opciones: [
      { texto: "Lo correcto, no lo fácil", casa: "Gryffindor" },
      { texto: "El fin justifica los medios", casa: "Slytherin" },
      { texto: "El saber es poder", casa: "Ravenclaw" },
      { texto: "La bondad siempre gana", casa: "Hufflepuff" }
    ]
  }
];

let preguntaActual = 0;
let puntajes = {
  Gryffindor: 0,
  Slytherin: 0,
  Ravenclaw: 0,
  Hufflepuff: 0
};

const contenedorPregunta = document.getElementById("pregunta");
const contenedorOpciones = document.getElementById("opciones");
const contenedorResultado = document.getElementById("resultado");

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  contenedorPregunta.textContent = pregunta.texto;
  contenedorOpciones.innerHTML = "";

  pregunta.opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.textContent = opcion.texto;
    btn.className = "boton-opcion";
    btn.addEventListener("click", () => {
      puntajes[opcion.casa]++;
      preguntaActual++;
      if (preguntaActual < preguntas.length) {
        mostrarPregunta();
      } else {
        mostrarResultado();
      }
    });
    contenedorOpciones.appendChild(btn);
  });
}

function mostrarResultado() {
  const casaGanadora = Object.entries(puntajes).sort((a, b) => b[1] - a[1])[0][0];
  contenedorPregunta.textContent = "";
  contenedorOpciones.innerHTML = "";
  contenedorResultado.innerHTML = "";

  const resultadoBox = document.createElement("div");
  resultadoBox.className = "resultado-box";
  resultadoBox.innerHTML = `
    <p>🧙 ¡El Sombrero ha decidido!<br> Sos de <strong>${casaGanadora}</strong> 🏰</p>
    <img src="assets/${casaGanadora.toLowerCase()}-escudo.png" alt="${casaGanadora}" />
  `;

  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "🔁 Volver a jugar";
  btnReiniciar.addEventListener("click", () => {
    preguntaActual = 0;
    puntajes = {
      Gryffindor: 0,
      Slytherin: 0,
      Ravenclaw: 0,
      Hufflepuff: 0
    };
    contenedorResultado.innerHTML = "";
    mostrarPregunta();
  });

  resultadoBox.appendChild(btnReiniciar);
  contenedorResultado.appendChild(resultadoBox);

  localStorage.setItem("hogwartsCasa", casaGanadora);
}

mostrarPregunta();

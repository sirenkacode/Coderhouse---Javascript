const preguntas = [
  {
    texto: "¿Qué valorás más?",
    opciones: [
      { texto: "Valentía", casa: "Gryffindor" },
      { texto: "Ambición", casa: "Slytherin" },
      { texto: "Sabiduría", casa: "Ravenclaw" },
      { texto: "Lealtad", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "¿Cuál sería tu materia favorita?",
    opciones: [
      { texto: "Defensa Contra las Artes Oscuras", casa: "Gryffindor" },
      { texto: "Pociones", casa: "Slytherin" },
      { texto: "Aritmancia", casa: "Ravenclaw" },
      { texto: "Cuidado de Criaturas Mágicas", casa: "Hufflepuff" }
    ]
  },
  {
    texto: "Elegí un animal:",
    opciones: [
      { texto: "León", casa: "Gryffindor" },
      { texto: "Serpiente", casa: "Slytherin" },
      { texto: "Águila", casa: "Ravenclaw" },
      { texto: "Tejón", casa: "Hufflepuff" }
    ]
  }
];

let puntajes = {
  Gryffindor: 0,
  Slytherin: 0,
  Ravenclaw: 0,
  Hufflepuff: 0
};

let preguntaActual = 0;

const contenedorPregunta = document.getElementById("pregunta");
const contenedorOpciones = document.getElementById("opciones");
const contenedorResultado = document.getElementById("resultado");

function mostrarPregunta() {
  const actual = preguntas[preguntaActual];
  contenedorPregunta.textContent = actual.texto;
  contenedorOpciones.innerHTML = "";

  actual.opciones.forEach(opcion => {
    const btn = document.createElement("button");
    btn.textContent = opcion.texto;
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
  contenedorResultado.innerHTML = ""; // Limpiar

  // Crear contenedor
  const resultadoBox = document.createElement("div");
  resultadoBox.className = "resultado-box";
  resultadoBox.innerHTML = `
    <p>🧙 ¡El Sombrero ha decidido!<br> Sos de <strong>${casaGanadora}</strong> 🏰</p>
    <img src="assets/${casaGanadora.toLowerCase()}-escudo.png" alt="${casaGanadora}" />
  `;

  // Botón
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


document.addEventListener("DOMContentLoaded", mostrarPregunta);

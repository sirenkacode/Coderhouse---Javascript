// Parte 1: Elección de equipo
function elegirEquipo() {
  let equipo = prompt("¿Sos Team Edward o Team Jacob? (escribí 'Edward' o 'Jacob')");
  while (equipo !== "Edward" && equipo !== "Jacob") {
    equipo = prompt("Opción inválida. Escribí 'Edward' o 'Jacob'");
  }
  alert(`¡Elegiste a ${equipo}! Te espera una noche inolvidable... o mortal.`);
  return equipo;
}

// Parte 2: Desarrollo de la cita con Edward
function citaConEdward() {
  alert("Edward te mira con ojos brillantes y te invita a una velada elegante bajo la luna.");

  const aceptaBebida = confirm("¿Aceptás una copa de sangre sintética?");
  const irBosque = confirm("Te propone caminar por el bosque. ¿Aceptás?");
  const quedarte = confirm("Te ofrece quedarte a dormir en su mansión. ¿Te quedás?");

  if (aceptaBebida && irBosque && quedarte) {
    alert("¡Te enamoraste y ahora sos parte del clan Cullen! 💘");
    console.log("Final feliz con Edward.");
  } else {
    alert("Algo no le gustó... y bueno... ahora sos su cena. 🩸");
    console.log("Edward te comió.");
  }
}

// Parte 2: Desarrollo de la cita con Jacob
function citaConJacob() {
  alert("Jacob aparece sin remera (obvio) y te invita a una fogata en la reserva Quileute.");

  const aceptaFogata = confirm("¿Te sentás junto a él frente al fuego?");
  const nadar = confirm("Te invita a nadar en el lago a medianoche. ¿Aceptás?");
  const acariciar = confirm("¿Le acariciás el lomo en forma de lobo?");

  if (aceptaFogata && nadar && acariciar) {
    alert("¡Te convertiste en su alma gemela y viven aventuras salvajes juntos! 🐺❤️");
    console.log("Final feliz con Jacob.");
  } else {
    alert("Ups... se transformó y te confundió con un ciervo. 🐺💀");
    console.log("Jacob te devoró.");
  }
}

// Lógica principal
function iniciarSimulador() {
  alert("¡Bienvenid@ a tu cita sobrenatural!");

  const equipo = elegirEquipo();

  if (equipo === "Edward") {
    citaConEdward();
  } else {
    citaConJacob();
  }

  alert("Gracias por jugar. Mirá el resultado final en la consola.");
}

// Ejecutar simulador
iniciarSimulador();

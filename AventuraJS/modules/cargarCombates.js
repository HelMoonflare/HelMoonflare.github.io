import { enemigos } from "./cargarEnemigos.js";
import { jugador } from "./datosJugador.js";
import { combate } from "./batalla.js";

let indiceCombate = 0;

// Referencias a los botones
const btnSiguiente = document.getElementById("btnSiguienteCombate");
const btnContinuar = document.getElementById("btnEscena5");

// Mostrar combate actual
export function mostrarCombate() {

    // Mostrar "Siguiente", ocultar "Continuar"
    btnSiguiente.style.display = "block";
    btnContinuar.style.display = "none";

    if (indiceCombate >= enemigos.length) {
        console.log("Todos los combates finalizados");
        return;
    }

    const enemigo = enemigos[indiceCombate];

    const contJugador = document.getElementById("jugador-combate");
    const contEnemigo = document.getElementById("enemigo-combate");

    // Resetear animaciones
    contJugador.classList.remove("en-posicion");
    contEnemigo.classList.remove("en-posicion");

    setTimeout(() => {
        contJugador.classList.add("en-posicion");
        contEnemigo.classList.add("en-posicion");
    }, 550);

    // Actualizar imágenes y stats
    document.getElementById("img-jugador-combate").src = jugador.avatar;
    document.getElementById("stats-jugador-combate").textContent =
        `ATQ: ${jugador.atqTotal()} | DEF: ${jugador.defTotal()} | VIDA: ${jugador.vidaTotal()}`;

    document.getElementById("img-enemigo-combate").src = enemigo.avatar;
    document.getElementById("stats-enemigo-combate").textContent =
        `ATQ: ${enemigo.ataque} | VIDA: ${enemigo.vida}`;

    // Ejecutar el combate instantáneo
    const resultado = combate(jugador, enemigo);
    console.log(`Ganador: ${resultado.ganador.nombre}, Puntos: ${resultado.puntosObtenidos}`);
}

// Iniciar los combates desde el primero
export function iniciarCombate() {
    indiceCombate = 0;
    mostrarCombate();
}

// Pasar al siguiente combate
export function siguienteCombate() {
    indiceCombate++;

    if (indiceCombate < enemigos.length) {
        mostrarCombate();

    } else {
        // Ocultar "Siguiente" y mostrar "Continuar"
        btnSiguiente.style.display = "none";
        btnContinuar.style.display = "block";
    }
}

// Listener del botón de siguiente
if (btnSiguiente) {
    btnSiguiente.addEventListener("click", siguienteCombate);
}

// Listener del botón de continuar
btnContinuar.addEventListener("click", () => {
    cambiarEscena("escena6");
});

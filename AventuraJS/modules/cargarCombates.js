import { enemigos } from "./cargarEnemigos.js";
import { jugador } from "./datosJugador.js";  // el jugador que tenemos desde el mercado
import { combate } from "./batalla.js";

let indiceCombate = 0;

// Mostrar combate actual
export function mostrarCombate() {
    if (indiceCombate >= enemigos.length) return;

    const enemigo = enemigos[indiceCombate];
    const contJugador = document.getElementById("jugador-combate");
    const contEnemigo = document.getElementById("enemigo-combate");

    // 1. Resetear clases de animación
    contJugador.classList.remove("en-posicion");
    contEnemigo.classList.remove("en-posicion");

    // 2. Actualizar imágenes y stats
    document.getElementById("img-jugador-combate").src = jugador.avatar;
    document.getElementById("stats-jugador-combate").textContent =
        `ATQ: ${jugador.atqTotal()} | DEF: ${jugador.defTotal()} | VIDA: ${jugador.vidaTotal()}`;

    document.getElementById("img-enemigo-combate").src = enemigo.avatar;
    document.getElementById("stats-enemigo-combate").textContent =
        `ATQ: ${enemigo.ataque} | VIDA: ${enemigo.vida}`;

    // 3. Forzar reflow
    contJugador.offsetWidth;
    contEnemigo.offsetWidth;

    // 4. Activar animación después de un pequeño delay
    setTimeout(() => {
        contJugador.classList.add("en-posicion");
        contEnemigo.classList.add("en-posicion");
    }, 500);

    // Ejecutar el combate instantáneamente
    const resultado = combate(jugador, enemigo);
    console.log(`Combate contra ${enemigo.nombre}: Ganador: ${resultado.ganador.nombre}, Puntos: ${resultado.puntosObtenidos}`);
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
        console.log("¡Todos los combates han terminado!");
        // Aquí podrías activar el botón de continuar a la escena 6
    }
}

// Configurar el listener del botón una sola vez
const btnSiguiente = document.getElementById("btnSiguienteCombate");
if (btnSiguiente) {
    btnSiguiente.addEventListener("click", siguienteCombate);
}
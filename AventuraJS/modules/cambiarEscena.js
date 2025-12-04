import { cargarTarjetaJugador } from "./cargarTarjetaJugador.js";
import { actualizarStats } from "./actualizarStats.js";
import { cargarEnemigos } from "./cargarEnemigos.js";
import { iniciarCombate, siguienteCombate } from "./cargarCombates.js";
import { mostrarResultadosFinales } from "./animacionResultados.js";


const escenas = [
    { actual: "escena0", siguiente: "escena1", boton: "btnEscena0" },
    { actual: "escena1", siguiente: "escena2", boton: "btnEscena1" },
    { actual: "escena2", siguiente: "escena3", boton: "btnEscena2" },
    { actual: "escena3", siguiente: "escena4", boton: "btnEscena3" },
    { actual: "escena4", siguiente: "escena5", boton: "btnEscena4" },
    { actual: "escena5", siguiente: "escena6", boton: "btnEscena5" },
    { actual: "escena6", siguiente: "escena0", boton: "btnReiniciar" }
];

export function cambiarEscena(idEscenaActual, idEscenaSiguiente) {
    const escenaActual = document.getElementById(idEscenaActual);
    const escenaSiguiente = document.getElementById(idEscenaSiguiente);

    if (escenaActual && escenaSiguiente) {
        escenaActual.style.display = 'none';
        escenaSiguiente.style.display = 'block';
    }
}

for (const e of escenas) {
    const boton = document.getElementById(e.boton);
    cargarTarjetaJugador();

    if (boton) {
        boton.addEventListener("click", () => {
            // Mostrar la escena
            cambiarEscena(e.actual, e.siguiente);

            // Inicialización de escenas
            switch (e.siguiente) {
                case "escena3":
                    actualizarStats();
                    break;
                case "escena4":
                    cargarEnemigos();
                    break;
                case "escena5":
                    iniciarCombate();
                    break;
                case "escena6":
                    requestAnimationFrame(mostrarResultadosFinales);
                    break;
            }
        });
    }
}

// Listener del botón de siguiente combate, solo si existe
const btnSiguiente = document.getElementById("btnSiguienteCombate");
if (btnSiguiente) {
    btnSiguiente.addEventListener("click", siguienteCombate);
}

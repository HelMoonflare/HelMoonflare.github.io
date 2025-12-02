import { actualizarStats } from "./actualizarStats.js";
import { cargarEnemigos } from "./cargarEnemigos.js";
import { iniciarCombate, siguienteCombate } from "./cargarCombates.js";
import { mostrarResultadosFinales } from "./animacionResultados.js";


const escenas = [
    { actual: "escena1", siguiente: "escena2", boton: "btnEscena1" },
    { actual: "escena2", siguiente: "escena3", boton: "btnEscena2" },
    { actual: "escena3", siguiente: "escena4", boton: "btnEscena3" },
    { actual: "escena4", siguiente: "escena5", boton: "btnEscena4" },
    { actual: "escena5", siguiente: "escena6", boton: "btnEscena5" },
    { actual: "escena6", siguiente: "escena1", boton: "btnReiniciar" }
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

    if (boton) {
        boton.addEventListener("click", () => {
            // Escena 1
            if (e.siguiente === "escena1") {
                mostrarTarjetaJugador();
            }

            // Escena 2 a 3
            if (e.actual === "escena2") {
                actualizarStats();
            }

            // Escena 3 a 4
            if (e.actual === "escena3") {
                cargarEnemigos();
            }

            // Escena 4 a 5 (primer combate)
            if (e.actual === "escena4" && e.siguiente === "escena5") {
                cambiarEscena(e.actual, e.siguiente); // primero mostrar la escena

                iniciarCombate(); // luego iniciar combate
            }

            // Escena 5 a 6
            if (e.actual === "escena5" && e.siguiente === "escena6") {
                requestAnimationFrame(() => {
                    mostrarResultadosFinales();
                });
            }

            cambiarEscena(e.actual, e.siguiente);
        });
    }
}

//  Listener global, solo una vez
document.getElementById("btnSiguienteCombate").addEventListener("click", siguienteCombate);
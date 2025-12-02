import { jugador } from "./datosJugador.js";

export function actualizarStats() {
    // Calcular valores finales
    const ataque = jugador.atqTotal();
    const defensa = jugador.defTotal();
    const vida = jugador.vidaTotal();

    // Insertarlos en el HTML
    document.querySelector("#stat-ataque").textContent = ataque;
    document.querySelector("#stat-defensa").textContent = defensa;
    document.querySelector("#stat-vida").textContent = vida;
}


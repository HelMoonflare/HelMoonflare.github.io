import { Jefe } from "../constants/Jefe.js";

export function combate(jugador, enemigo) {

    let ganador = null;
    let puntosObtenidos = 0;
    let vidaActualJugador = jugador.vida + jugador.defensa;
    let vidaActualEnemigo = enemigo.vida;
    let combateEnCurso = true;

    // El combate tendrá lugar mientas ambos personajes tengan más de 0 puntos de vida
    while (combateEnCurso && vidaActualJugador > 0 && vidaActualEnemigo > 0) {
        vidaActualJugador -= enemigo.ataque;
        vidaActualEnemigo -= jugador.ataque;

        // Si alguno de los dos presonajes muere,
        // salimos inmediatamente del bucle para no hacer ninguna iteración más
        if (vidaActualEnemigo <= 0 || vidaActualJugador <= 0) {
            combateEnCurso = false;
        }

    }

    if (vidaActualEnemigo <= 0) {
        ganador = jugador;
        puntosObtenidos = 100 + enemigo.ataque;

        if (enemigo instanceof Jefe) {
            puntosObtenidos *= enemigo.multiplicador;
        }

    } else if (vidaActualJugador <= 0) {
        ganador = enemigo;
        puntosObtenidos = 0;
    }

    return { ganador, puntosObtenidos };
}
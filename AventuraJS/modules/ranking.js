import { Jugador } from "./Jugador.js"

export function distinguirJugador(jugador, umbral = 500) {
    if (jugador.puntos >= umbral) {
        return "Veterano";
    } else {
        return "Novato";
    }
}

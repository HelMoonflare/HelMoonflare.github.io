import { Jugador } from "../constants/Jugador.js";

// Creamos la instancia del jugador
export const jugador = new Jugador(
    "Héroe",
    "avatar.png",
    10,     // ataque base
    5,      // defensa base
    100,     // vida base
    0,      // puntos iniciales
    []    // inventario inicial
);

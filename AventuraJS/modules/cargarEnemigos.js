import { Enemigo } from "../constants/Enemigo.js"
import { Jefe } from "../constants/Jefe.js"

export const enemigos = [
    new Enemigo("Goblin", "goblin.jpg", 5, 10),
    new Enemigo("Orco", "orco.jpg", 15, 20),
    new Enemigo("Lobo de la estepa", "lobo.jpg", 25, 30),
    new Jefe("Gigante", "gigante.jpg", 40, 40)
];

export function cargarEnemigos() {
    const gridEnemigos = document.getElementById("grid-enemigos");

    gridEnemigos.innerHTML = ""; // limpiar por si se recarga

    for (const enemigo of enemigos) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-enemigo");

        const img = document.createElement("img");
        img.src = enemigo.img;
        img.alt = enemigo.nombre;

        const nombre = document.createElement("h3");
        nombre.textContent = enemigo.nombre;

        const ataque = document.createElement("p");
        ataque.textContent = "ATQ: " + enemigo.ataque;

        const vida = document.createElement("p");
        vida.textContent = "VIDA: " + enemigo.vida;

        tarjeta.appendChild(img);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(ataque);
        tarjeta.appendChild(vida);

        gridEnemigos.appendChild(tarjeta);
    }
}

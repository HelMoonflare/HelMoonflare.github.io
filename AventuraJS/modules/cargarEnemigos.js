import { Enemigo } from "../constants/Enemigo.js"
import { Jefe } from "../constants/Jefe.js"

export const enemigos = [
    new Enemigo("Ghul", "images/ghul.jpg", 5, 10),
    new Enemigo("Orco", "images/orco.jpg", 15, 20),
    new Enemigo("Caragor blanco", "images/caragor.jpg", 25, 30),
    new Jefe("Balrog de Morgoth", "images/balrog.jpg", 40, 40)
];

export function cargarEnemigos() {
    const gridEnemigos = document.getElementById("grid-enemigos");

    gridEnemigos.innerHTML = ""; // limpiar por si se recarga

    for (const enemigo of enemigos) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-enemigo");

        tarjeta.innerHTML = `
                <img src="${enemigo.avatar}">
                <h2>${enemigo.nombre}</h2>
                <p>Ataque: ${enemigo.ataque}</p>
                <p>Vida: ${enemigo.vida}</p>
            `;

        // const img = document.createElement("img");
        // img.src = enemigo.img;
        // img.alt = enemigo.nombre;

        // const nombre = document.createElement("h3");
        // nombre.textContent = enemigo.nombre;

        // const ataque = document.createElement("p");
        // ataque.textContent = "ATQ: " + enemigo.ataque;

        // const vida = document.createElement("p");
        // vida.textContent = "VIDA: " + enemigo.vida;

        // tarjeta.appendChild(img);
        // tarjeta.appendChild(nombre);
        // tarjeta.appendChild(ataque);
        // tarjeta.appendChild(vida);

        gridEnemigos.appendChild(tarjeta);
    }
}

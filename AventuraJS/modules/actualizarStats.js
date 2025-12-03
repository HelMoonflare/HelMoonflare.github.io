import { jugador } from "./datosJugador.js";
import { productos } from "./mercado.js";

export function actualizarStats() {
    // Referencias a los elementos del DOM
    const ataqueSpan = document.getElementById("stat-ataque");
    const defensaSpan = document.getElementById("stat-defensa");
    const vidaSpan = document.getElementById("stat-vida");

    ataqueSpan.textContent = jugador.atqTotal();
    defensaSpan.textContent = jugador.defTotal();
    vidaSpan.textContent = jugador.vidaTotal();

    // Crear tarjeta del jugador
    const contenedorTarjeta = document.getElementById("tarjeta-jugador");
    if (contenedorTarjeta) {
        contenedorTarjeta.innerHTML = `
            <img src="${jugador.avatar}" alt="Avatar del jugador">
            <h2>Jugador: ${jugador.nombre}</h2>
            <p>Puntos: ${jugador.puntos}</p>
            <p>Ataque: ${jugador.atqTotal()}</p>
            <p>Defensa: ${jugador.defTotal()}</p>
            <p>Vida: ${jugador.vidaTotal()}</p>
        `;
    }

    const inventario = document.getElementById("inventario");
    if (!inventario) return;

    inventario.innerHTML = ""; // Limpiar inventario previo

    jugador.inventario.forEach(productos => {
        const producto = document.createElement("div");
        producto.classList.add("producto");

        // Imagen del objeto
        const img = document.createElement("img");
        img.src = productos.avatar; // Cada objeto debe tener la propiedad 'avatar' con la ruta correcta
        img.alt = productos.nombre;
        img.classList.add("imagen-producto-cesta");

        producto.appendChild(img);

        inventario.appendChild(producto);
    });
}




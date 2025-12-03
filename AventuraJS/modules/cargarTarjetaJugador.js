import { jugador } from "./datosJugador.js";

export function cargarTarjetaJugador() {
    const contenedor = document.getElementById("tarjeta-jugador");
    if (!contenedor) return; // Por seguridad

    contenedor.innerHTML = ""; // Limpiar por si acaso

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-jugador");

    tarjeta.innerHTML = `
        <img src="${jugador.avatar}" alt="Avatar del jugador">
        <h2>${jugador.nombre}</h2>
        <p>Puntos: ${jugador.puntos}</p>
        <p>Ataque: ${jugador.atqTotal()}</p>
        <p>Defensa: ${jugador.defTotal()}</p>
        <p>Vida: ${jugador.vidaTotal()}</p>
    `;

    // Mostrar inventario si existe
    if (jugador.inventario.length > 0) {
        const listaInventario = document.createElement("ul");
        listaInventario.classList.add("inventario-jugador");

        jugador.inventario.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.nombre} (+${item.bonus})`;
            listaInventario.appendChild(li);
        });

        tarjeta.appendChild(listaInventario);
    }

    contenedor.appendChild(tarjeta);
}

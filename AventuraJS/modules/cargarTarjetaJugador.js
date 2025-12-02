import { jugador } from "./datosJugador.js";

export function mostrarTarjetaJugador() {
    const contenedor = document.getElementById("tarjeta-jugador");
    contenedor.innerHTML = ""; // Limpiar por si acaso

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-jugador");

    tarjeta.innerHTML = `
        <h2>Jugador: ${jugador.nombre}</h2>
        <img src="${jugador.avatar}" alt="Avatar del jugador">
        <p>Puntos: ${jugador.puntos}</p>
        <p>Ataque: ${jugador.atqTotal()}</p>
        <p>Defensa: ${jugador.defTotal()}</p>
        <p>Vida: ${jugador.vidaTotal()}</p>
    `;

    // Mostrar los objetos del inventario
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

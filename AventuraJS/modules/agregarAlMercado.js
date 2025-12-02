import { productos } from "./mercado.js";
import { jugador } from "./datosJugador.js";

const grid = document.querySelector(".grid-productos");
const cesta = document.querySelector(".cesta-productos");

for (const producto of productos) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    const nombre = document.createElement("p");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = producto.precio + " monedas";

    const bonus = document.createElement("p");
    bonus.textContent = "Bonus: +" + producto.bonus;

    const agregar = document.createElement("button");
    agregar.textContent = "Añadir";
    agregar.classList.add("btn-agregar");

    tarjeta.append(nombre, precio, bonus, agregar);
    grid.appendChild(tarjeta);

    agregar.addEventListener("click", () => {
        if (!tarjeta.classList.contains("seleccionado")) {
            // Añadir al inventario
            jugador.agregarObjeto(producto);

            // Crear tarjeta en la cesta
            const tarjetaCesta = document.createElement("div");
            tarjetaCesta.classList.add("producto");
            tarjetaCesta.dataset.nombre = producto.nombre;

            const nombreCesta = document.createElement("p");
            nombreCesta.textContent = producto.nombre;

            const bonusCesta = document.createElement("p");
            bonusCesta.textContent = "Bonus: +" + producto.bonus;

            tarjetaCesta.append(nombreCesta, bonusCesta);
            cesta.appendChild(tarjetaCesta);

            // Cambiar estilo del botón y tarjeta
            tarjeta.classList.add("seleccionado");
            agregar.textContent = "Retirar";
            agregar.classList.add("btn-retirar");
        } else {
            // Retirar del inventario
            jugador.eliminarObjeto(producto);

            // Quitar tarjeta de la cesta
            const tarjetaEnCesta = cesta.querySelector(`[data-nombre="${producto.nombre}"]`);
            if (tarjetaEnCesta) {
                cesta.removeChild(tarjetaEnCesta);
            }

            // Restaurar estilo del botón y tarjeta
            tarjeta.classList.remove("seleccionado");
            agregar.textContent = "Añadir";
            agregar.classList.remove("btn-retirar");
        }
    });
}

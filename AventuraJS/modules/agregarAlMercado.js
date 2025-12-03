import { productos } from "./mercado.js";
import { jugador } from "./datosJugador.js";

const grid = document.querySelector(".grid-productos");
const cesta = document.querySelector(".cesta-productos");

for (const producto of productos) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;
    img.classList.add("imagen-producto-mercado");

    const nombre = document.createElement("p");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = producto.precio + " monedas";

    const bonus = document.createElement("p");
    bonus.textContent = "Bonus: +" + producto.bonus;

    const agregar = document.createElement("button");
    agregar.textContent = "Añadir";
    agregar.classList.add("btn-agregar");

    tarjeta.append(img, nombre, precio, bonus, agregar);
    grid.appendChild(tarjeta);

    agregar.addEventListener("click", () => {
        if (!tarjeta.classList.contains("seleccionado")) {
            // Añadir al inventario
            jugador.agregarObjeto(producto);

            // Crear tarjeta para la cesta
            const tarjetaCesta = document.createElement("div");
            tarjetaCesta.classList.add("producto");
            tarjetaCesta.dataset.nombre = producto.nombre;

            // Imagen del producto
            const imgCesta = document.createElement("img");
            imgCesta.src = producto.imagen;
            imgCesta.alt = producto.nombre;
            imgCesta.classList.add("imagen-producto-cesta");

            tarjetaCesta.appendChild(imgCesta);

            cesta.appendChild(tarjetaCesta);

            // Cambiar estilo del botón
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

            // Restaurar estilo
            tarjeta.classList.remove("seleccionado");
            agregar.textContent = "Añadir";
            agregar.classList.remove("btn-retirar");
        }
    });

}

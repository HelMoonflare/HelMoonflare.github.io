import { Producto } from "./Producto.js";

export class Jugador {
    constructor(nombre, avatar, ataque, defensa, vida, dinero, puntos = 0, inventario = []) {
        this.nombre = nombre;
        this.avatar = avatar;
        this.puntos = puntos;
        this.inventario = inventario;
        this.dinero = dinero;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
    }


    // Creamos una copia de un producto aplicándole un descuento del 0%
    // y añadimos el producto a nuestro inventario.
    // De esta manera no estamos modificando ni eliminando los productos del módulo mercado.js
    agregarObjeto(producto) {
        let clonProducto = producto.aplicarDescuento(0);
        this.inventario.push(clonProducto);
    }

    eliminarObjeto(producto) {
        const indice = this.inventario.indexOf(producto);
        if (indice !== -1) {
            this.inventario.splice(indice, 1);
        }
    }

    actualizarPuntos(puntos) {
        this.puntos += puntos;
    }

    // Los siguientes métodos actualizan las estadísticas de nuestro personaje al comprar un arma, armadura o consumible
    atqTotal() {
        const bonus = this.inventario.reduce((total, producto) => {
            if (producto.tipo === 'arma') {
                return total + producto.bonus;
            } else {
                return total;
            }
        }, 0);

        return this.ataque + bonus;
    }



    // Los siguientes métodos son idénticos a atqTotal(), sólo que para la defensa y la vida
    defTotal() {
        const bonus = this.inventario.reduce((total, producto) => {
            if (producto.tipo === 'armadura') {
                return total + producto.bonus;
            } else {
                return total;
            }
        }, 0);

        return this.defensa + bonus;
    }

    vidaTotal() {
        const bonus = this.inventario.reduce((total, producto) => {
            if (producto.tipo === 'consumible') {
                return total + producto.bonus;
            } else {
                return total;
            }
        }, 0);

        return this.vida + bonus;
    }
}
export class Producto {
    constructor(nombre, imagen, precio, rareza, tipo, bonus) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.rareza = rareza;
        this.tipo = tipo;
        this.bonus = bonus;
    }

    formatearAtributos() {
        // El método toFixed(n) redondea el número a n dígitos después del punto decimal 
        // y devuelve una cadena que representa el resultado
        // También se usa el método replace() para cambiar los puntos por comas.
        let precioFormateado = `${this.precio.toFixed(2).replace('.', ',')}€`;
        let rarezaFormateada = this.rareza.charAt(0).toUpperCase() + this.rareza.slice(1).toLowerCase();
        return { precioFormateado, rarezaFormateada };
    }

    aplicarDescuento(descuento) {
        let precioOriginal = this.precio;
        let rebaja = precioOriginal * descuento;
        let precioRebajado = precioOriginal - rebaja;

        const productoRebajado = new Producto(this.nombre, this.imagen, precioRebajado, this.rareza, this.tipo, this.bonus);
        return productoRebajado;
    }
}
import { Producto } from "../constants/Producto.js";

function filtrarPorRareza(rareza) {
    let filtrados = productos.filter(producto => producto.rareza === rareza);
    return filtrados;
}


function buscarProducto(nombre) {
    let encontrado = productos.find(producto => producto.nombre === nombre);
    if (encontrado) {
        return encontrado;
    } else {
        return null;
    }
}


function aplicarDescuentoARareza(rareza, descuento = 0.2) {
    const filtrados = filtrarPorRareza(rareza);
    const productosConDescuento = [];

    for (let producto of filtrados) {
        const clon = producto.aplicarDescuento(descuento)
        productosConDescuento.push(clon);
    }
    return productosConDescuento;
}

export const productos = [
    new Producto("Espada de Angmar", "images/espada.png", 200, "rara", "arma", 10),
    new Producto("Armadura Negra", "images/armadura.png", 250, "muy rara", "armadura", 15),
    new Producto("Arco", "images/arco.png", 200, "rara", "rara", 5),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
        new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),
    new Producto("Poción de vitalidad", "images/pocion.jpg", 50, "comun", "consumible", 10),

];

export { filtrarPorRareza, buscarProducto, aplicarDescuentoARareza };
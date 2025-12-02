import { Enemigo } from "./Enemigo.js";

export class Jefe extends Enemigo {
    constructor(nombre, avatar, ataque, vida, multiplicador) {
        super(nombre, avatar, ataque, vida);
        this.multiplicador = multiplicador;
    }
}

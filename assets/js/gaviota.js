import Omnivoro from "./omnivoros.js";

export default class gaviota extends Omnivoro{
    #velocidad;

    constructor(idAnimal, descripcion, tipoComida, velocidad){
        super(idAnimal, descripcion, tipoComida);
        this.#velocidad = velocidad;
    }
    
    get velocidad() {
    return this.#velocidad;
    }
    
    set velocidad(velocidad) {
    this.#velocidad = velocidad;
    }

desplazarse(){
    return `gaviota vuele a ${this.#velocidad} kms`;
}

}
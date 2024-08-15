import Carnivoro from "./carnivoros.js";

export default class Tigre extends Carnivoro{
    #velocidad

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
    return `tigre desplaza ${this.#velocidad} kms`;
}
}
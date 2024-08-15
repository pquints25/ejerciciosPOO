import Hervivoro from "./herbivoro.js";

export default class jirafa extends Hervivoro{
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
        return `jirafa desplaza a ${this.#velocidad} kms`;
    }
}


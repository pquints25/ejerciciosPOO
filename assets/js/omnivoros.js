import Animal from "./animal.js";

export default class Omnivoro extends Animal{
    #tipoComida;


constructor(idAnimal, descripcion, tipoComida)
{
    super (idAnimal, descripcion);
    this.#tipoComida = tipoComida;
}

get tipoComida() {
return this.#tipoComida;
}

set tipoComida(tipoComida) {
this._tipoComida = tipoComida;
}

alimentarse(){
    return `omnivoro se alimenta ${this.#tipoComida}.`;
}

desplazarse(){
    return `omnivoro se desplaza`;
}
}
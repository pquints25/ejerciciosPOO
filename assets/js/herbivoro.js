import Animal from "./animal.js";

export default class Hervivoro extends Animal{
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
    return `hervivoro se alimenta ${this.#tipoComida}.`;
}

desplazarse(){
    return `herivoro se desplaza`;
}
}
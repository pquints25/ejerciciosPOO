import Animal from "./animal.js";

export default class Carnivoro extends Animal{
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
    return `carnivoro se alimenta ${this.#tipoComida}.`;
}

desplazarse(){
    return `carnivoro se desplaza`;
}


} //export default extends abarca todo el codigo hacia abajo
export default class Zoologico{
    #idZoologico;
    #nombreZoologico;
    #animales;

    constructor(idZoologico, nombreZoologico, animales){
        this.#idZoologico = idZoologico;
        this.#nombreZoologico = nombreZoologico;
        this.#animales = animales;
    }

    get idZoologico() {
    return this.#idZoologico;
    }
    
    set idZoologico(idZoologico) {
    this.#idZoologico = idZoologico;
    }

    get nombreZoologico() {
    return this.#nombreZoologico;
    }
    
    set nombreZoologico(nombreZoologico) {
    this.#nombreZoologico = nombreZoologico;
    }

agregarAnimal(animal){
    this.#animales.push(animal);
}

quitarAnimales (idAnimal){
    this.#animales = this.#animales.filter(animal => animal.idAnimal !== idAnimal);
}

listaAnimales(){
    return this.#animales;
}

buscarAnimal(idAnimal){
    return this.#animales.find(animal => animal.idAnimal === idAnimal);
}
}




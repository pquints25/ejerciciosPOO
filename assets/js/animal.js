export default class Animal{
    #idAnimal;
    #descripcion;

constructor(idAnimal, descripcion){
    this.#idAnimal
    this.#descripcion
}
    get idAnimal() {
    return this.#idAnimal;
    }
    
    set idAnimal(idAnimal) {
    this.#idAnimal = idAnimal;
    }


    get descripcion() {
    return this.#descripcion;
    }
    
    set descipcion(descripcion) {
    this.#descripcion = descripcion;
    }

    desplazarse(){
        return 'desplaza';
    }

    alimentarse(){
        return 'alimenta';
    }











}
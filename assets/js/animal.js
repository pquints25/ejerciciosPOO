export default class Animal{
    #nombre
    #edad
    #peso

    constructor(nombre, edad, peso){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#peso = peso;
    }
    
    get nombre() {
        return this.#nombre;
    }
    
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get edad() {
        return this.#edad;
    }
    
    set edad(edad) {
        this.#edad = edad;
    }
    
    get peso() {
        return this.#peso;
    }
    
    set peso(peso) {
        this.#peso = peso;
    }

    comer(){
        console.log(`${this.#nombre} esta comiendo`);
        
    }

    mover(){
        console.log(`${this.#nombre} esta moviendo`);
        
    }
}
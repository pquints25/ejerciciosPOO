export default class Categoria {
    #idCategoria;
    #nombre;
    #productos;

    constructor(idCategoria, nombre) {
        this.#idCategoria = idCategoria;
        this.#nombre = nombre;
        this.#productos = [];
    }

    get idCategoria() {
        return this.#idCategoria;
    }
    
    set idCategoria(idCategoria) {
        this.#idCategoria = idCategoria;
    }

    get nombre() {
        return this.#nombre;
    }
    
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get productos() {
        return this.#productos;
    }

    agregarProducto(producto) {
        this.#productos.push(producto);
    }
}
export default class Producto {
    #idProducto;
    #nombreProducto;
    #precioUnitario;
    #stock;
    #categoria;

    constructor(idProducto, nombreProducto, precioUnitario, stock, categoria) {
        this.#idProducto = idProducto;
        this.#nombreProducto = nombreProducto;
        this.#precioUnitario = precioUnitario;
        this.#stock = stock;
        this.#categoria = categoria;
        this.#categoria.agregarProducto(this);
    }

    get idProducto() {
        return this.#idProducto;
    }
    
    set idProducto(idProducto) {
        this.#idProducto = idProducto;
    }

    get nombreProducto() {
        return this.#nombreProducto;
    }
    
    set nombreProducto(nombreProducto) {
        this.#nombreProducto = nombreProducto;
    }

    get precioUnitario() {
        return this.#precioUnitario;
    }
    
    set precioUnitario(precioUnitario) {
        this.#precioUnitario = precioUnitario;
    }

    get stock() {
        return this.#stock;
    }
    
    set stock(stock) {
        this.#stock = stock;
    }
}

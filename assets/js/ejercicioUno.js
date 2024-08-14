export default class Producto{
    #idProducto;
    #nombreProducto;
    #precioUnitario;
    #stock;

constructor (idProducto, nombreProducto, precioUnitario, stock = 0){
            this.#idProducto = idProducto;
            this.#nombreProducto = nombreProducto;
            this.#precioUnitario = precioUnitario;
            this.#stock = stock;
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

descontarStock(cantidad)
{ 
    this.stock -= cantidad;
    
};

aumentarStock(cantidad)
{ 
    this.stock += cantidad;
};


} 





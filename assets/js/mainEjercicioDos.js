import Producto from "./ejercicioDos.js";
import Categoria from "./ejercicioDos1.js";

let categoria = new Categoria(1, 'Coleccionable');

let productoUno = new Producto(1, 'FunkoPop', 15000, 100, categoria);
let productoDos = new Producto(2, 'QPosket', 20000, 50, categoria);
let productoTres = new Producto(3, 'ShFiguarts', 50000, 10, categoria);
let productoCuatro = new Producto (4, 'Grandista', 40000, 5, categoria);

console.log(categoria.productos);


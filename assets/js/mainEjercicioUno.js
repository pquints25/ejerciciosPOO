import Producto from "./ejercicioUno.js";

let productoUno = new Producto ('1', 'telefono', 150000, 30);
let productoDos = new Producto ('2', 'reloj', 90000, 20);
let productoTres = new Producto ('3', 'audifonos', 100000, 40);
let productoCuatro = new Producto ('4', 'carcasa', 10000, 100);

productoUno.descontarStock(4);
productoUno.descontarStock(2)
productoUno.aumentarStock(6);

console.log(productoUno, productoDos, productoTres, productoCuatro);


const inventario = [
    {
        nombre: "manzanas",
        cantidad: 10,
        esPerecedero: true
    },
    {
        nombre: "arroz",
        cantidad: 50,
        esPerecedero: false
    }
];

const primerProducto = inventario[0].nombre; // Accede al nombre del primer producto
//cambiar la cantidad del segundo producto
inventario[1].cantidad = 45; // Actualiza la cantidad del segundo producto a 45

const precioBase = "2500";
const precioConvertido = Number(precioBase); // Convierte "2500" a 2500 (tipo Number)
const precioFinal = precioConvertido * inventario[0].cantidad; // Calcula el precio final multiplicando el precio convertido por la cantidad del primer producto

console.log(`el producto ${inventario[0].nombre} tiene un stock de ${inventario[0].cantidad} unidades y un precio final de ${precioFinal}`); // Imprime la información del producto utilizando template literals para formatear la cadena de texto
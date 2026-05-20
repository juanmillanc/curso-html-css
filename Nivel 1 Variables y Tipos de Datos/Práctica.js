const PROYECTO = "Sistemas-Ventas";


let estado = "desarrollo";

const config ={
    puerto: 8000,
    db_conectado: true,
    tecnologias: ["Node.js", "React", "MongoDB"]
};

let numero = "3000";
let numeroConvertido = Number(numero); // Convierte "3000" a 3000 (tipo Number)
console.log(numeroConvertido + 500); // Imprime 3500, ya que "3000" se ha convertido a un número antes de la suma

console.log("El proyecto " + PROYECTO + " está en " + estado + "."); // Concatenación de strings

console.log("Tecnologías utilizadas: " + config.tecnologias.join(", ")); // Imprime "Tecnologías utilizadas: Node.js, React, MongoDB" utilizando el método join para convertir el array en una cadena de texto separada por comas
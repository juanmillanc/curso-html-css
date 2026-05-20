let stringNum = "10";

// Explícito
let convertido = Number(stringNum); // 10 (tipo Number)
let aString = String(100);          // "100" (tipo String)

// Coerción (JS lo hace solo - ¡Cuidado!)
console.log("5" + 5); // "55" (lo trata como string)
console.log("5" - 2); // 3 (lo trata como número)
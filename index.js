const fs = require('fs');

console.log(`Prueba3`);


const base = 2;

console.log(`================= 
Tabla del ${base}
====================`);

let resultado;

for (let i = 1; i <= 10; i++) {
    resultado += `${base} * ${i} = ${base * i}`
}
console.log(resultado);
fs.writeFileSync(`tablas/tabla-del-${base}`, resultado);
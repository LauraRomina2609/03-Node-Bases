const fs = require('fs');

console.log(`Prueba3`);


const base = 3;

console.log(`================= 
Tabla del ${base}
====================`);

let resultado = ` `;

for (let i = 1; i <= 10; i++) {
    resultado += `${base} * ${i} = ${base * i}\n`
}
console.log(resultado);
fs.writeFileSync(`tablas/tabla-del-${base}`, resultado);


const multiplicar = (base) => {
    console.log(`==================`);
    console.log(`Tabla del ${base}`); 
    console.log(`==================`);

    let resultado = ` `;

    for (let i = 1; i <= 10; i++) {
        resultado += `${base} * ${i} = ${base * i}\n`
    }
    
    console.log(resultado);
    fs.writeFileSync(`tablas/tabla-del-${base}`, resultado);
}

module.exports = {
    multiplicar
}
const argv = requiere(`yargs`).argv;


console.log(argv);

const {multiplicar} = require(`./multiplicador`);

const base = 5;

multiplicar(base);

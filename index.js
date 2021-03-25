const argv = require(`yargs`)

            .option(`b`, {
            alias: `base`,
            type: `number`,
            demandOption: true,
            describe: `es la base de la tabla`
            })

            .argv;
const {multiplicar} = require(`./multiplicador`);

console.log(argv);

const base = 5;

multiplicar(base);

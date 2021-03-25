const argv = require(`yargs`)

            .options(`b`, {
            alias: `base`,
            type: `number`,
            demandOption: true,
            describe: `es la base de la tabla`
            })

            .argv;
const {multiplicar} = require(`./multiplicador`);

multiplicar(argv.b);

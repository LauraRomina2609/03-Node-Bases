const argv = require(`yargs`)

            .options(`b`, {
            alias: `base`,
            type: `number`,
            demandOption: true,
            describe: `es la base de la tabla`
            })

            .options(`l`, {
              alias: `limite`,
              type: `number`,
              demandOption: false,
              default: 10,
              describe: `es el límite del multiplicador`
              })

              .options(`v`, {
                alias: `visualizar`,
                type: `boolean`,
                demandOption: false,
                default: false,
                describe: `muestra tabla en la consola`
                })

                .help()

                .version()
         
            .check((argv, options) => {
                if (isNaN(argv.b)) {
                  throw new Error(`La base tiene que ser un número.`)
                }
                return true 
              })

            .argv;
                        

            const {multiplicar} = require(`./multiplicador`);

multiplicar(argv.b, argv.l, argv.v);

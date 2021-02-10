const argv = require('yargs')
    .options(
        {'b': 
            {
                alias:'base',
                type: 'number',
                demandOption: true,
                describe: 'solo comentarios'
            }

        },
        {'l':
            {
                alias: 'listar',
                type: 'boolean',
                default: false,
            }
        },
        {'h':
            {
                alias: 'hasta',
                type: 'number',
                default: 15,
            }
        }
        
    )
    .check((argv,option)=>{
        if(isNaN(argv.b)){
            throw 'Solo numero';
        }
        return true;
    })
    .argv;

module.exports=argv;

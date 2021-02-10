const { crearArchivo } = require('./helpers/multiplicar'); 
const argv=require('./config/yargs');
require('colors');
console.clear();

crearArchivo(argv.b,argv.l,argv.h)
 .then(filename=>console.log(`Table name: `.rainbow,filename))
 .catch(err=>err)




/*console.clear();
const tabla=3;
let salida='';
for (let i = 1; i <= 10; i++) {
    salida+=`${ tabla } X ${ (i)} = ${ tabla*(i) }\n`;
}

fs.writeFileSync(`tabla-${tabla}.txt`,salida);
console.log('exito'); */

/*const [,,arg3] =process.argv;
const [,base = 5] =arg3.split('=');
console.log(base);

//const base = 14; 
crearArchivo(base)
 .then(filename=>console.log(`Table name: `,filename))
 .catch(err=>err)*/

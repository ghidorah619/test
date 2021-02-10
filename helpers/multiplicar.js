require('colors');
const fs = require('fs');
const crearArchivo = async(base,listar,hasta) =>{
    try{
        let salida,consola='';
        let fileName=`tabla-${base}.txt`;
        for (let i = 1; i <= hasta; i++) {
            salida+=`${ base } X ${ (i)} = ${ base*(i) }\n`;
            consola+=`${ base } ${ 'X'.green } ${ (i)} = ${ base*(i) }\n`;
        }
        if(listar){ console.log(consola); }
        fs.writeFileSync(`./salida/${ fileName }`,salida);
        
        return fileName;
    }catch(err){
        return error;
    }
    
}
module.exports={
    crearArchivo
}
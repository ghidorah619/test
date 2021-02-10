const object = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Renegenerar',
    getNombre(){
        return `${ this.nombre } ${this.apellido} ${this.poder}`
    }
}

//ejemplo 
//const {nombre,poder}=object;
//const {nombre,poder,edad=10}=object;

/*function imprimir(heroe){
    const {nombre,poder,edad=10}=heroe;
    console.log(nombre, poder,edad); 
}*/

function imprimir({nombre,poder,edad=10}){
    console.log(nombre, poder,edad); 
}
imprimir(object);


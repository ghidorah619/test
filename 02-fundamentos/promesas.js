const empleados = [
    {
        id: 1,
        nombre: 'A'
    },
    {
        id: 2,
        nombre: 'b'
    },
    {
        id: 3,
        nombre: 'c'
    }
];

const sueldo = [
    {
        id: 1,
        sueldo: 1000
    },
    {
        id: 2,
        sueldo: 2000
    },

];

const getEmpleado = (id) => {
    
    return new Promise((resolve,reject)=>{
        const empleado=empleados.find(e=> e.id===id )?.nombre;
        (empleado)?resolve(empleado):reject(`No se encontraron datos para el ID ${id}`);
    });
}

/*getEmpleado(id)
    .then(empleado=>console.log(empleado))
    .catch( err=>console.log(err));*/


const getSalario = (id) => {
    return new Promise((resolve,reject)=>{
        const salario=sueldo.find(s=>s.id===id)?.sueldo;
        (salario)?resolve(salario):reject(`No existe salario el ID ${id}`);
    });
}

/*getSalario(id)
    .then(salario=>console.log(salario))
    .catch(err=>console.log(err));*/

//EN cadena
const id=1;
let nombre;
getEmpleado(id)
    .then(empleado=> {
        nombre=empleado;
        return getSalario(id)
    })
    .then(salario=> console.log('El empleado :',nombre, 'tiene un salario de: ',salario))
    .catch(err=>console.log(err))


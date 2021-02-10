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
const getSalario = (id) => {
    return new Promise((resolve,reject)=>{
        const salario=sueldo.find(s=>s.id===id)?.sueldo;
        (salario)?resolve(salario):reject(`No existe salario el ID ${id}`);
    });
}

const getInfoUsuario = async(id)=>{

    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El Salario del empleado: ${ empleado } es de ${salario}`;
    }catch(error){
        return error;
    }

}

const id=1;
getInfoUsuario(id)
    .then( msg=>{
        console.log('TODO BIEN!')
        console.log(msg)
    })
    .catch(err=>{
        console.log('TODO MAL')
        console.log(err)
    })
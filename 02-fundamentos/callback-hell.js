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

const getEmpleado = (id,callback) => {
    const empleado=empleados.find((e)=>{
        return e.id===id;
    });
    if(empleado){
        callback(null,empleado);
    }else{
        callback(`El empleado ${id} no existe`,null);
    }

}
getEmpleado(1,(err,empleado)=>{
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado Existe');
    console.log(empleado.nombre);
});

const getSalario=(id, callback)=>{
    const salario = sueldo.find(e=>e.id===id)?.salario;
    if(salario){
        callback(null,salario);
    }else{
        callback(`No hay datos ${id} no existe`,null);
    }
}
id=10;
getSalario(id, (err,salario)=>{
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('Empleado Existe');
    console.log(salario);
});
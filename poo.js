class Empleado{

    static contadorEmpelados = 0;
    constructor(nombre,cargo,modalidad){
        this._nombre = nombre;
        this._cargo = cargo;
        this._modalidad=modalidad;
        this._idEmpleado = ++Empleado.contadorEmpelados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    } 
    get cargo(){
        return this.cargo;
    }
    set cargo(cargo){
        this._cargo = cargo;
    } 
    get modalidad(){
        return this.modalidad;
    }
    set modalidad(modalidad){
        this._modalidad = modalidad;
    } 
}
class Remoto extends Empleado{
    static contadorRemotos = 0;
    constructor(nombre,cargo,modalidad){
        super(nombre,cargo,modalidad)
        this._idRemoto = ++Remoto.contadorRemotos;
    }
}

class Presencial extends Empleado{
    static contadorPresencial = 0;
    constructor(nombre,cargo,modalidad){
        super(nombre,cargo,modalidad)
        this._idPresencial = + Presencial.contadorPresencial;
    }
}

const arrRemotos = [
        new Remoto("Jorge","QA","remoto"),
        new Remoto("Daniel","Front","remoto")
];
console.log(arrRemotos);


const arrPresenciales = [
new Presencial("Jorge","QA","presencial"),
new Presencial("Daniel","Front","presencial")
];

console.log(arrPresenciales);

function mostrarEmpleados(){
    for(let presencial of arrPresenciales){
        console.log(`Nombre = ${presencial.nombre}`);
    }
}
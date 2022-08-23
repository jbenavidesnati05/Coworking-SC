let Puestos = [1,2,3,4,5,6,7,8,9,10]
console.log(Puestos);


let puestoAgregadoFinal = Puestos.push(11);
console.log(Puestos);
console.log("Puesto agregado al final = "+puestoAgregadoFinal);

let puestoAgregadoInicio = Puestos.unshift(0);
console.log(Puestos);
console.log("Puesto agregado al inicio = "+puestoAgregadoInicio);

let puestoEliminadoFinal = Puestos.pop()
console.log(Puestos);
console.log("Puesto eliminado al final "+puestoEliminadoFinal);
console.log(Puestos);

let puestoEliminadoInicio = Puestos.shift()
console.log("puesto eliminado al inicio = "+ puestoEliminadoInicio);
console.log(Puestos);


let contadorPuestos = Puestos.length
console.log("Puestos contados = " +contadorPuestos);
console.log(Puestos);





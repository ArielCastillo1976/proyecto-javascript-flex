console.log("Estamos conectados...");

const nombreAlumno = 'ariel'//string
const apellidoAlumno = "Castillo"; //string
const edadAlumno = 49;//number
const nososBecado = true;//boolean
const sosBecado = false;//boolean



const profesorCoder = {
    nombre: 'cristian',
    apellido: 'Cabrera',
    edad: 28
}

//TYPE OF sirve para saber el tipo de dato
console.log('dame el tipo de dato de la variable nombreProfesor: ', typeof nombreAlumno);
console.log('dame el tipo de dato de la variable edadProfesor: ', typeof edadAlumno);
console.log('dame el tipo de dato de la variable sosProfesor: ', typeof nososBecado);
console.log('dame el tipo de dato de la variable alumnoCoder:', typeof profesorCoder);



//CONCATENAR 2 STRING
const apellido = 'castillo';
const cursada = 'Javascript-flex';


console.log('Mi apellido es ' + apellido + ' y curse ' + cursada);


const usuarioApellido = prompt('decime tu apellido');
console.log('el apellido es', usuarioApellido);
const edadUsuario = prompt('tu edad?');
console.log('edad usuario; ', edadUsuario);
console.log('typeof de promp: ', typeof usuarioApellido);
console.log('typeof de promp: ', typeof edadUsuario);


alert('se excedio el límite de tiempo, se cerrara la sesion');




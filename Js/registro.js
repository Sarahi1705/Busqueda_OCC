let urlBase = "https://localhost:44323";

const MetodoLogin = () => {

    fetch(`${urlBase}/api/Usuarios`)
    .then(response => response.text())
    .then(data => console.log("Metodo Get", data))

};

const Metodo = () => {
    let participantes = ["gabo", "vic", "raul", "omar"];

    fetch(`${urlBase}/api/prueba`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Metodo Post api", data))

};


const PostUsuario = () => {
var nombre =document.getElementById('nombres').value;
var apellido =document.getElementById('apellidos').value;
var correo =document.getElementById('correo').value;
var contrasena =document.getElementById('contrasena').value;
var fecha =document.getElementById('start').value;
    console.log(fecha);
    let participantes = 
        {
            Nombre: nombre,
            Apellido: apellido,
            FechaNacimiento:fecha,
            Contrasena: contrasena,
            Correo: correo
        }
    fetch(`${urlBase}/api/Usuarios`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const {nombre}=data;
        console.log(nombre);
    })
        //console.log("Metodo Post usuario", data))

};
function registro(){
    PostUsuarios();
   // window.open("../index.html");
    
};

const MetodoPut = () => {

    fetch(`${urlBase}/api/prueba`, {
        method: 'PUT',
    })
    .then(response => response.text())
    .then(data => console.log("Metodo Put api", data))

};

const MetodoDelete = () => {

    fetch(`${urlBase}/api/prueba`, {
        method: 'DELETE',
    })
    .then(response => response.text())
    .then(data => console.log("Metodo Delete api", data))

};

const ListaParticipantes = () => {

    fetch(`${urlBase}/api/prueba/obtenerparticipantes`)
    .then(response => response.json())
    .then(data => console.log("Lista de participantes api", data))

};

const ParticipantesMayoresDeEdad = () => {
    fetch(`${urlBase}/api/prueba/mayoresdeedad`)
    .then(response => response.json())
    .then(data => console.log("Participantes mayores de edad", data))
}

//MetodoGet();
/*MetodoPost();
MetodoPost2();
MetodoPut();
MetodoDelete();
ListaParticipantes();
ParticipantesMayoresDeEdad();*/
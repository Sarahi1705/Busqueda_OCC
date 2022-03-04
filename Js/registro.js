let urlBase = "https://localhost:44323";

const MetodoLogin = () => {

    fetch(`${urlBase}/api/Usuarios`)
    .then(response => response.text())
    .then(data => console.log("Metodo Get", data))

};

var  i=1;
const GetUsuario = ()=> {
fetch(`${urlBase}/api/Usuarios/`)
.then(response => response.json())
.then(data => console.log("Metodo get usuario",data))
};
GetUsuario();

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
    .then(data =>         console.log("Metodo Post usuario", data))
        

};


var emp;
function testAsync(){
    return new Promise((resolve,reject)=>{
        //here our function should be implemented 
        setTimeout(()=>{
            var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 1; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 1; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Nombre Empresa: "+ document.getElementById('b').value +", Total Vacantes: "+ emp);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
    
            resolve();
        ;} , 8000
        );
    });
}
const  PostBus = () => {
    var empresa =document.getElementById('b').value;
    fetch(`${urlBase}/api/Busquedas/Scraping`, {
        method: 'POST',
        body: JSON.stringify(empresa),
        headers: {
            'Content-Type': 'application/json'
        }
        })
    .then(response => response.json())
    .then(data =>         console.log("Metodo Post scrappi", emp=data))
};
async function callerFun(){
    PostBus();
    await testAsync();
}



function genera_tabla() {
 //Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 1; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Nombre Empresa: "+ document.getElementById('b').value +", Total Vacantes: "+ emp);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }

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
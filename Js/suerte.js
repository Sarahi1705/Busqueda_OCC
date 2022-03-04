let urlBase = "https://localhost:44323";

//Realiza el registro
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
//Dibuja la tabla

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
        ;} , 15000
        );
    });
}

//Scrapi
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
//Funcion con cronometro
async function callerFun(){
    PostBus();
    await testAsync();
    PostBusqueda();
}
const PostBusqueda = () => {
    let participantes = 
        {
        	"id_busqueda":0,
  "nombreEmpresa": document.getElementById('b').value,
  "total_Vacantes": emp,
  "fechaBusqueda": "2022-03-04T11:18:56.015Z"
}
    fetch(`${urlBase}/api/Busquedas`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data =>         console.log("Metodo Post busqueda", data))
        

};

function registro(){
    PostUsuarios();
   // window.open("../index.html");
    
};
let urlBase = "https://localhost:44349";
const MetodoGet = () => {

    fetch(`${urlBase}/api/Usuarios`)
    .then(response => response.text())
    .then(data => console.log("Metodo Get", data))

};

const MetodoPost = () => {
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

const MetodoPost2 = () => {
    let participantes = [
        {
            Nombre: "Gabo",
            Edad: 17,
            FechaNacimiento: '1994-10-17'
        },
        {
            Nombre: "Gabo2",
            Edad: 25,
            FechaNacimiento: '1994-10-17'
        },
        {
            Nombre: "Gabo3",
            Edad: 56,
            FechaNacimiento: '1994-10-17'
        }
    ]
    fetch(`${urlBase}/api/prueba/post2`, {
        method: 'POST',
        body: JSON.stringify(participantes),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Metodo Post2 api", data))

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

MetodoGet();
/*MetodoPost();
MetodoPost2();
MetodoPut();
MetodoDelete();
ListaParticipantes();
ParticipantesMayoresDeEdad();*/
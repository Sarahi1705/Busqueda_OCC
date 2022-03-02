using Brive.Bootcamp.PruebaApi.Models;
using Brive.Bootcamp.PruebaApi.Servicios;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Description;

namespace Brive.Bootcamp.PruebaApi.Controllers
{
    [EnableCors("PruebaApi")]
    [Route("api/[controller]")]
    [ApiController]
    public class PruebaController : ControllerBase
    {
        private readonly IParticipantes _participantes;

        public PruebaController(IParticipantes participantes)
        {
            _participantes = participantes;
        }

        [HttpGet]
        public string Get()
        {
            return "Hola mungo Get";
        }

        [HttpPost]
        public string[] Post([FromBody] string[] listadoNombres)
        {

            return listadoNombres.Where(w => !String.IsNullOrEmpty(w)).ToArray();
        }

        [HttpPost]
        [Route("post2")]
        public Participantes[] Post([FromBody] Participantes[] participantes)
        {
            return participantes.Where(participante => participante.Edad >= 18).ToArray();
        }

        [HttpPut]
        public string Put()
        {
            return "Hola Put";
        }

        [HttpDelete]
        public string Delete()
        {
            return "Hola Delete";
        }

        [HttpGet]
        [Route("obtenerparticipantes")]
        public Participantes[] ObtenerParticipantes()
        {
            return _participantes.ObtenerParticipantes();
        }

        [HttpGet]
        [Route("mayoresdeedad")]
        public Participantes[] ObtenerParticipantesMayoresDeEdad()
        {
            return _participantes.ObtenerParticipantesMayoresDeEdad();
        }
    }
}

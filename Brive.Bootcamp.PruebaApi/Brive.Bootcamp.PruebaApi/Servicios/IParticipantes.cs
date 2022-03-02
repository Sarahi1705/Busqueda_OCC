using Brive.Bootcamp.PruebaApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brive.Bootcamp.PruebaApi.Servicios
{
    public interface IParticipantes
    {
        bool GuardarParticipante(Participantes participantes);

        Participantes[] ObtenerParticipantes();

        Participantes[] ObtenerParticipantesMayoresDeEdad();
    }
}

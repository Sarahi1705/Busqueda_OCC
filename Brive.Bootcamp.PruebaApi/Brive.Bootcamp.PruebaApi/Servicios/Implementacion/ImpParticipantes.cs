using Brive.Bootcamp.PruebaApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Brive.Bootcamp.PruebaApi.Servicios.Implementacion
{
    //Se ve todo lo del negocio
    public class ImpParticipantes : IParticipantes
    {
        public bool GuardarParticipante(Participantes participantes)
        {
            if (participantes == null)
                return false;
            
            return true;
        }

        public Participantes[] ObtenerParticipantes()
        {
            return GenerarListadoDeParticipantes();
        }

        public Participantes[] ObtenerParticipantesMayoresDeEdad()
        {
            Participantes[] participantes = GenerarListadoDeParticipantes();

            return participantes.Where(participante => participante.Edad >= 18).ToArray();
        }

        private Participantes[] GenerarListadoDeParticipantes()
        {
            List<Participantes> participantes = new List<Participantes>();
            for (int i = 0; i < 50; i++)
            {
                Participantes participante = new Participantes
                {
                    Nombre = $"Participante {i + 1}",
                    Edad = 10 + (i + 1),
                    FechaNacimiento = DateTime.Now
                };

                participantes.Add(participante);
            }

            return participantes.ToArray();
        }
    }
}

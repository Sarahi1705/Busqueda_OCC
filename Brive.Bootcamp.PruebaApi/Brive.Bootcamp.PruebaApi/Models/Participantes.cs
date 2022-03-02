using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.Schema;

namespace Brive.Bootcamp.PruebaApi.Models
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column("Nombre")]
        public string Nombre { get; set; }
        [Column("Apellido")]
        public string Apellido { get; set; }
        [Column("FechaNacimiento")]
        public DateTime FechaNacimiento { get; set; }
        [Column("Contrasena")]
        public string Contrasena { get; set; }

    }
}

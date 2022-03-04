using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ApiSuerte.Models
{
    [Table("Busqueda")]
    public partial class Busqueda
    {
        [Key]
        public int Id_Busqueda { get; set; }

        [Required]
        [StringLength(50)]
        public string NombreEmpresa { get; set; }

        public int Total_Vacantes { get; set; }

        public DateTime FechaBusqueda { get; set; }

        //public int Id_Busqueda_Usuario { get; set; }

        //public virtual Usuario Usuario { get; set; }
    }
}

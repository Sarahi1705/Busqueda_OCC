namespace Proyecto.Suerte.ApiReall.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("BusquedaUsuario")]
    public partial class BusquedaUsuario
    {
        [Key]
        public int Id_Busqueda_Usuario { get; set; }

        public int Id { get; set; }

        public int IdBusqueda { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ApiSuerte.Models;

namespace ApiSuerte.Data
{
    public class ApiSuerteContext : DbContext
    {
        public ApiSuerteContext (DbContextOptions<ApiSuerteContext> options)
            : base(options)
        {
        }

        //public DbSet<ApiSuerte.Models.Usuario> Usuario { get; set; }

        //public DbSet<ApiSuerte.Models.Busqueda> Busqueda { get; set; }
    }
}

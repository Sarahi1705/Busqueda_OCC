using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiSuerte.Data;
using ApiSuerte.Models;

namespace ApiSuerte.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusquedasController : ControllerBase
    {
        private readonly ApiSuerteContext _context;

        public BusquedasController(ApiSuerteContext context)
        {
            _context = context;
        }

        // GET: api/Busquedas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Busqueda>>> GetBusqueda()
        {
            return null;
                //await _context.Busqueda.ToListAsync();
        }

        // GET: api/Busquedas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Busqueda>> GetBusqueda(int id)
        {
            Busqueda busqueda=null;
            //await _context.Busqueda.FindAsync(id);

            if (busqueda == null)
            {
                return NotFound();
            }

            return busqueda;
        }

        // PUT: api/Busquedas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBusqueda(int id, Busqueda busqueda)
        {
            if (id != busqueda.Id_Busqueda)
            {
                return BadRequest();
            }

            _context.Entry(busqueda).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusquedaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Busquedas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Busqueda>> PostBusqueda(Busqueda busqueda)
        {
            //_context.Busqueda.Add(busqueda);
            //await _context.SaveChangesAsync();

            return CreatedAtAction("GetBusqueda", new { id = busqueda.Id_Busqueda }, busqueda);
        }

        // DELETE: api/Busquedas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBusqueda(int id)
        {
            //var busqueda = await _context.Busqueda.FindAsync(id);
            //if (busqueda == null)
            //{
            //    return NotFound();
            //}

            //_context.Busqueda.Remove(busqueda);
            //await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BusquedaExists(int id)
        {
            return true;
            //_context.Busqueda.Any(e => e.Id_Busqueda == id);
        }
    }
}

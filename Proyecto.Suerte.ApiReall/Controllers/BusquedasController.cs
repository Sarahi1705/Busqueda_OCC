using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Proyecto.Suerte.ApiReall.Models;

namespace Proyecto.Suerte.ApiReall.Controllers
{
    public class BusquedasController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/Busquedas
        public IQueryable<Busqueda> GetBusqueda()
        {
            return db.Busqueda;
        }

        // GET: api/Busquedas/5
        [ResponseType(typeof(Busqueda))]
        public IHttpActionResult GetBusqueda(int id)
        {
            Busqueda busqueda = db.Busqueda.Find(id);
            if (busqueda == null)
            {
                return NotFound();
            }

            return Ok(busqueda);
        }

        // PUT: api/Busquedas/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBusqueda(int id, Busqueda busqueda)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != busqueda.Id_Busqueda)
            {
                return BadRequest();
            }

            db.Entry(busqueda).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
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

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Busquedas
        [ResponseType(typeof(Busqueda))]
        public IHttpActionResult PostBusqueda(Busqueda busqueda)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Busqueda.Add(busqueda);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = busqueda.Id_Busqueda }, busqueda);
        }

        // DELETE: api/Busquedas/5
        [ResponseType(typeof(Busqueda))]
        public IHttpActionResult DeleteBusqueda(int id)
        {
            Busqueda busqueda = db.Busqueda.Find(id);
            if (busqueda == null)
            {
                return NotFound();
            }

            db.Busqueda.Remove(busqueda);
            db.SaveChanges();

            return Ok(busqueda);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BusquedaExists(int id)
        {
            return db.Busqueda.Count(e => e.Id_Busqueda == id) > 0;
        }
    }
}
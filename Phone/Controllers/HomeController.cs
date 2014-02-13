using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Phone.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult Result(string name, string surname)
        {
            var db = new PhoneBaseEntities1();
            var ab = db.Abonenty.Where(n => n.Name == name && n.Surname == surname);

            return Json(ab);
        }

    }
}

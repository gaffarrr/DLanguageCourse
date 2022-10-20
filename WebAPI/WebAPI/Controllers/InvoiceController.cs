using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    public class InvoiceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

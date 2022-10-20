using DLanguage.Model.Entities;
using DLanguage.Service.Interface.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/invoice/[controller]")]
    [ApiController]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceService invoiceService;
        public InvoiceController(IInvoiceService invoiceService)
        {
            this.invoiceService = invoiceService;
        }
        [HttpPost]
        public async Task<IActionResult> CreateInvoice([FromBody] Invoice invoice)
        {
            var result = await invoiceService.CreateInvoice(invoice.id, invoice.student_id, invoice.invoice_date, invoice.total_price);
            return Ok(result);
        }
    }
}

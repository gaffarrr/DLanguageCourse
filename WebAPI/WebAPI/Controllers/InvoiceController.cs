using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
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
        [HttpGet("detail/{id}")]
        public async Task<List<DetailInvoice>> GetDetailInvoice(string id)
        {
            var result = await invoiceService.GetDetailInvoice(id);
            return result;
        }
        [HttpGet("display/{id:int}")]
        public async Task<List<InvoiceDisplay>> GetMyInvoices(int id)
        {
            return await invoiceService.GetMyInvoices(id);
        }

    }
}

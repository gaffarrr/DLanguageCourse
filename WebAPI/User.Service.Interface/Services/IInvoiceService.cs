using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface IInvoiceService
    {
        public Task<bool> CreateInvoice(string id, int student_id, DateOnly invoice_date, decimal total_price);
    }
}

using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface IInvoiceService
    {
        public Task<bool> CreateInvoice(string id, int student_id, DateOnly invoice_date, decimal total_price);
        public Task<List<DetailInvoice>> GetDetailInvoice(string id);
        public Task<List<InvoiceDisplay>> GetMyInvoices(int student_id);
    }
}

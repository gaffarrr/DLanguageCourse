using DLanguage.Data.Interface.Repositories;
using DLanguage.Service.Interface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class InvoiceService : IInvoiceService
    {
        private readonly IInvoiceRepository invoiceRepository;
        private readonly SqlConnection _db;
        public InvoiceService(IInvoiceRepository invoiceRepository)
        {
            this.invoiceRepository = invoiceRepository;
            _db = new SqlConnection("LanguageAppCon");
        }
        public async Task<bool> CreateInvoice(string id,int student_id,DateOnly invoice_date,decimal total_price)
        {
            var command = invoiceRepository.CreateInvoice();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@student_id", student_id);
                cmd.Parameters.AddWithValue("@invoice_date", invoice_date);
                cmd.Parameters.AddWithValue("@total_price",total_price);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

    }
}

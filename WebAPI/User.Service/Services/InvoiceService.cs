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


    }
}

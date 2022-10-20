using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Data.Interface.Repositories
{
    public interface IInvoiceRepository
    {
        public string CreateInvoice();
        public string CreateInvoiceRelation();
        public string GetDetailInvoice();
        public string GetMyCourse();
        public string GetMyInvoices();
    }
}

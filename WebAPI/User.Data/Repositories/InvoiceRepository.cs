using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Data.Repositories
{
    public class InvoiceRepository : IInvoiceRepository
    {
        public string CreateInvoice()
        {
            var result = "insert into invoice " +
                "(id,student_id,invoice_date,total_price) " +
                "values(@id,@student_id,@invoice_date,@total_price";
            return result;
        }

        public string CreateInvoiceRelation()
        {
            throw new NotImplementedException();
        }

        public string GetDetailInvoice()
        {
            throw new NotImplementedException();
        }

        public string GetMyCourse()
        {
            throw new NotImplementedException();
        }
    }
}

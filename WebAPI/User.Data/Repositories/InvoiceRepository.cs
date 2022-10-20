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
            var result = "select x.course_name, y. language_name, z.schedule, x.price from courses x " +
                "join languages y on x.language_id=y.id join studentclass z on x.id=z.course_id " +
                "where z.invoice_id=@invoice_id;";
            return result;
        }

        public string GetMyCourse()
        {
            throw new NotImplementedException();
        }

        public string GetMyInvoices()
        {
            var result = "select x.id, x.date, x.total_price from invoices x where x.student_id=@id";
            return result;
        }
    }
}

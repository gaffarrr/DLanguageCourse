using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI._3_Data.Data.Interface
{
    public interface IInvoiceRepository
    {
        public string CreateInvoice();
        public string CreateInvoiceRelation();
        public string GetDetailInvoice();
        public string GetMyCourse();
    }
}

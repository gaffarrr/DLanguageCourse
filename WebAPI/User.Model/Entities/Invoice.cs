using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Model.Entities
{
    public class Invoice
    {
        public string id { get; set; }
        public int student_id { get; set; }
        public DateOnly invoice_date { get; set; }
        public decimal total_price { get; set; }
    }
}

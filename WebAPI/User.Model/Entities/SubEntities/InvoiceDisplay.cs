using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Model.Entities.SubEntities
{
    public class InvoiceDisplay
    {
        public string id { get; set; }
        public DateOnly invoice_date { get; set; }
        public decimal total_price { get; set; }
        public int amount { get; set; }

    }
}

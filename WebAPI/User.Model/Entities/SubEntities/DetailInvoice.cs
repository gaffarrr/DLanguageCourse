using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Model.Entities.SubEntities
{
    public class DetailInvoice
    {
        public string course_name { get; set; }
        public string language_name { get; set; }
        public DateOnly schedule { get; set; }
        public decimal price { get; set; }
    }
}

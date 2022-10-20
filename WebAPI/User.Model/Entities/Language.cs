using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Model.Entities
{
    public class Language
    {
        public int id { get; set; }
        public string language_name { get; set; }
        public string description { get; set; }
        public string flag { get; set; }
        public string banner_file { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI._1_Core
{
    public class Course
    {
        public int IdCourse { get; set; }
        public string CourseName { get; set; }
        public int IdLanguage { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
    }
}

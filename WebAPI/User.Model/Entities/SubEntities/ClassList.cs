﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Model.Entities.SubEntities
{
    public class ClassList
    {
        public string language_name { get; set; }
        public string course_name { get; set; }
        public string image_file { get; set; }
        public DateOnly schedule { get; set; }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Model.Entities
{
    public class Cart
    {
        public int student_id { get; set; }
        public int course_id { get; set; }
        public DateOnly schedule { get; set; }
    }
}

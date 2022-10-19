﻿using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Repositories
{
    public class StudentClassRepository:IStudentClassRepository
    {
        public string CreateRelation()
        {
            var result = "insert into studentclass values " +
                "(@student_id,@class_id,@schedule,@invoice_id";
            return result;
        }

        public string GetClassList()
        {
            var result = "select x.language_name,y.course_name,y.image_files,z.schedule " +
                "from languages x " +
                "inner join courses y on x.id=y.language_id " +
                "inner join studentsclass z on z.course_id=y.id " +
                "where z.student_id=@id";
            return result;
        }
    }
}

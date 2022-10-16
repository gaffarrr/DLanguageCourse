using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI._3_Data.Data.Interface;

namespace WebAPI._3_Data.Data
{
    public class CourseRepository : ICourseRepository
    {
        public string GetCourse()
        {
            var result = "select * from course";
            return result;
        }

        public string GetCourseByCategory()
        {
            var result = "select * from course where language_id = @IdLanguage";
            return result;
        }
    }
}

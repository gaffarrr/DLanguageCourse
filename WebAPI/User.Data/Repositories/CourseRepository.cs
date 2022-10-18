using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace DLanguage.Data.Repositories
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

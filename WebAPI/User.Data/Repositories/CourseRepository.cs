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
            var result = "select id,course_name,language_id,price,image_file,description from courses";
            return result;
        }

        public string GetCourseByCategory()
        {
            var result = "select x.id, y.language_name, x.course_name,x.price,x.image_file from courses x " +
                "join languages y on x.language_id=y.id " +
                "where y.id=@language_id;";
            return result;
        }

        public string GetCourseByCategoryExceptCurrent()
        {
            var result = "select x.id, y.language_name, x.course_name,x.price,x.image_file from courses x " +
                "join languages y on x.language_id=y.id " +
                "where y.id=@language_id AND NOT x.id=@id;";
            return result;
        }

        public string GetCourseById()
        {
            var result = "select x.id,x.language_id, y.language_name, x.course_name,x.price,x.image_file,x.description " +
                "from courses x join languages y on x.language_id=y.id " +
                "where x.id=@id;";
            return result;
        }

        
    }
}

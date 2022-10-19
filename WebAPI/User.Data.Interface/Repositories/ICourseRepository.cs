using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Data.Interface.Repositories
{
    public interface ICourseRepository
    {
        public string GetCourse();
        public string GetCourseById();
        public string GetCourseByCategory();
        public string GetCourseByCategoryExceptCurrent();
    }
}

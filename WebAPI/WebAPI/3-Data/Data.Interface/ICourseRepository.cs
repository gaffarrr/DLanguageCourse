using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI._3_Data.Data.Interface
{
    public interface ICourseRepository
    {
        public string GetCourse();
        public string GetCourseByCategory();
    }
}

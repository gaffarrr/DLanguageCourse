using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI._1_Core;

namespace WebAPI._2_Service.Service.Interface
{
    interface ICourseService
    {
        public Task<List<Course>> Get();
        public Task<List<Course>> GetByCategory(int languageId);

    }
}

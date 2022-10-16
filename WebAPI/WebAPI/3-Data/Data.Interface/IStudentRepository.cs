using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI._3_Data.Data.Interface
{
    interface IStudentRepository
    {
        public string CreateStudent();
        public string LoginStudent();
        public string UpdateStudent();
    }
}

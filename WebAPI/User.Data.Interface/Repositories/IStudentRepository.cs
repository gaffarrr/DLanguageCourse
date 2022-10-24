using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Data.Interface.Repositories
{
    public interface IStudentRepository
    {
        public string CreateStudent();
        public string LoginStudent();
        public string UpdateStudent();
        public string GetPassword();
    }
}

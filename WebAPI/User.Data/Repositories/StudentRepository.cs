using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Data.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        public string CreateStudent()
        {
            var result = "insert into students (name,email,password) " +
                "values (@name,@email,@password)";
            return result;
        }

        public string GetPassword()
        {
            var result = "select top 1 email, password from students where email=@email";
            return result;
        }

        public string LoginStudent()
        {
            var result = "SELECT * FROM students WHERE email = @email";
            return result;
        }

        public string UpdateStudent()
        {
            var result = "update students set password=@password where email=@email";
            return result;
        }
        
    }
}

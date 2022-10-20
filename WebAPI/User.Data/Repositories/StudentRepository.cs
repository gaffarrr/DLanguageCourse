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

        public string IsEmailThere()
        {
            var result = "select count(1) from students where email=@email";
            return result;
        }

        public string LoginStudent()
        {
            var result = "SELECT * FROM students WHERE email = @email AND password = @password";
            return result;
        }

        public string UpdateStudent()
        {
            var result = "update students set password=@password where id=@id";
            return result;
        }
        
    }
}

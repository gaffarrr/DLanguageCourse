using DLanguage.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface IStudentService
    {
        public Task<bool> CreateStudent(Student student);
        public Task<bool> IsEmailThere(string email);
        public Task<bool> LoginStudent(string email, string password);
        public Task<bool> UpdateStudent(int id,string password);
    }
}

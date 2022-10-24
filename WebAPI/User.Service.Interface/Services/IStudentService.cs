using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface IStudentService
    {
        public Task<bool> CreateStudent([FromBody] Student student);
        public Task<List<UserLogin>> GetPass(string email);
        public Task<string> LoginStudent([FromBody] UserLogin student);
        public Task<bool> UpdateStudent([FromBody] UserLogin student);
    }
}

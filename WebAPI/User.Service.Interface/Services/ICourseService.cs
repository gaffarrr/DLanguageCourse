using DLanguage.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    interface ICourseService
    {
        public Task<List<Course>> Get();
        public Task<List<Course>> GetByCategory(int languageId);

    }
}

using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface ICourseService
    {
        public Task<List<Course>> Get();
        public Task<List<CourseDisplay>> GetByCategory(int languageId);
        public Task<List<CourseDisplayDetail>> GetById(int studentid);
        public Task<List<CourseDisplay>> GetByCategoryExceptCurrent(int languageId,int id);

    }
}

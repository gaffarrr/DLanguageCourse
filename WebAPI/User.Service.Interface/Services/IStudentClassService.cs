using DLanguage.Model.Entities.SubEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface IStudentClassService
    {
        public Task<bool> CreateRelation(int student_id,int course_id,DateOnly schedule, string invoice_id);
        public Task<List<ClassList>> GetClassLists(int id);

    }
}

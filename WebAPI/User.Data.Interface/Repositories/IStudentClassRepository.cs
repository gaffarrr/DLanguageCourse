using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Interface.Repositories
{
    public interface IStudentClassRepository
    {
        public string CreateRelation();
        public string GetClassList();
        public string GetClassCount();
    }
}

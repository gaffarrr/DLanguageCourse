using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Repositories
{
    public class ScheduleRepository : IScheduleRepository
    {
        public string GetScheduleById()
        {
            var result = "select schedule from schedules where course_id=@id;";
            return result;
        }
    }
}

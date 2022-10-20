using DLanguage.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface IScheduleService
    {
        public Task<List<Schedules>> GetDatesById(int id);
    }
}

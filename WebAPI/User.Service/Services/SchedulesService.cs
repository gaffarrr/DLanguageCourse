using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Service.Interface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class SchedulesService : IScheduleService
    {
        private readonly IScheduleRepository scheduleRepository;
        private readonly SqlConnection _db;
        public SchedulesService(IScheduleRepository scheduleRepository)
        {
            this.scheduleRepository = scheduleRepository;
            _db = new SqlConnection("LanguageAppCon");
        }

        public async Task<List<Schedules>> GetDatesById(int id)
        {
            var command = scheduleRepository.GetScheduleById();
            var result = new List<Schedules>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new Schedules
                    {
                        schedule = DateOnly.FromDateTime(Convert.ToDateTime(reader["schedule"]))
                    });
                }
                await _db.CloseAsync();
                return result;
            }
        }
    }
}

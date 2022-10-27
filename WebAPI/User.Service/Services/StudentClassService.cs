using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class StudentClassService : IStudentClassService
    {
        private readonly IStudentClassRepository studentClassRepository;
        private readonly SqlConnection _db;
        public StudentClassService(IStudentClassRepository studentClassRepository, IConfiguration configuration)
        {
            this.studentClassRepository = studentClassRepository;
            _db= new SqlConnection(configuration.GetConnectionString("LanguageAppCon"));
        }
        public async Task<bool> CreateRelation(int student_id, int course_id, DateOnly schedule, string invoice_id)
        {
            var command = studentClassRepository.CreateRelation();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@student_id", student_id);
                cmd.Parameters.AddWithValue("@class_id", course_id);
                cmd.Parameters.AddWithValue("@schedule", schedule);
                cmd.Parameters.AddWithValue("@invoice_id", invoice_id);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

        public async Task<List<ClassList>> GetClassLists(int id)
        {
            var command = studentClassRepository.GetClassList();
            var result = new List<ClassList>();
            using(SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new ClassList
                    {
                        language_name = reader["language_name"].ToString(),
                        course_name = reader["course_name"].ToString(),
                        image_file = reader["image_file"].ToString(),
                        schedule = DateOnly.FromDateTime(Convert.ToDateTime(reader["schedule"]))
                    }) ;
                }
                await _db.CloseAsync();
            }
            return result;
        }
    }
}

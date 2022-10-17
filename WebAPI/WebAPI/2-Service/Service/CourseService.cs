using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebAPI._1_Core;
using WebAPI._2_Service.Service.Interface;
using WebAPI._3_Data.Data.Interface;

namespace WebAPI._2_Service.Service
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository courseRepository;
        private readonly SqlConnection _db;

        public CourseService(ICourseRepository courseRepository)
        {
            this.courseRepository = courseRepository;
            _db = new SqlConnection("LanguageAppCon");
        }
        public async Task<List<Course>> Get()
        {
            string command = courseRepository.GetCourse();
            var result = new List<Course>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new Course
                    {
                        IdCourse = Convert.ToInt32(reader["IdCourse"]),
                        CourseName = reader["CourseName"].ToString(),
                        IdLanguage = Convert.ToInt32(reader["IdLanguage"]),
                        Price = Convert.ToDecimal(reader["Price"]),
                        Image = reader["Image"].ToString(),
                        Description = reader["Description"].ToString()
                    }); 
                }
                await _db.CloseAsync();
            }
            return result;
        }

        public async Task<List<Course>> GetByCategory(int languageId)
        {
            string command = courseRepository.GetCourseByCategory();
            var result = new List<Course>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@IdLanguage", languageId);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new Course
                    {
                        IdCourse = Convert.ToInt32(reader["IdCourse"]),
                        CourseName = reader["CourseName"].ToString(),
                        IdLanguage = Convert.ToInt32(reader["IdLanguage"]),
                        Price = Convert.ToDecimal(reader["Price"]),
                        Image = reader["Image"].ToString(),
                        Description = reader["Description"].ToString()
                    });
                }
                await _db.CloseAsync();
            }
            return result;
        }
    }
}

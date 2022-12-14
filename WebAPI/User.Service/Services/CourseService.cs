
using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository courseRepository;
        private readonly SqlConnection _db;

        public CourseService(ICourseRepository courseRepository, IConfiguration configuration)
        {
            this.courseRepository = courseRepository;
            _db = new SqlConnection(configuration.GetConnectionString("LanguageAppCon"));
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
                        id = Convert.ToInt32(reader["id"]),
                        course_name = reader["course_name"].ToString(),
                        language_id = Convert.ToInt32(reader["language_id"]),
                        price = Convert.ToDecimal(reader["price"]),
                        image_file = reader["image_file"].ToString(),
                        description = reader["description"].ToString()
                    });
                }
                await _db.CloseAsync();
            }
            return result;
        }

        public async Task<List<CourseDisplay>> GetByCategory(int languageId)
        {
            string command = courseRepository.GetCourseByCategory();
            var result = new List<CourseDisplay>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@language_id", languageId);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new CourseDisplay
                    {
                        id = Convert.ToInt32(reader["id"]),
                        language_id = Convert.ToInt32(reader["id"]),
                        language_name = reader["language_name"].ToString(),
                        course_name = reader["course_name"].ToString(),
                        price = Convert.ToDecimal(reader["price"]),
                        image_file = reader["image_file"].ToString()
                    });
                }
                await _db.CloseAsync();
            }
            return result;
        }

        public async Task<List<CourseDisplay>> GetByCategoryExceptCurrent(int languageId, int id)
        {
            string command = courseRepository.GetCourseByCategoryExceptCurrent();
            var result = new List<CourseDisplay>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@language_id", languageId);
                cmd.Parameters.AddWithValue("@id", id);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new CourseDisplay
                    {
                        id = Convert.ToInt32(reader["id"]),
                        language_id = Convert.ToInt32(reader["language_id"]),
                        language_name = reader["language_name"].ToString(),
                        course_name = reader["course_name"].ToString(),
                        price = Convert.ToDecimal(reader["price"]),
                        image_file = reader["image_file"].ToString()
                    });
                }
                await _db.CloseAsync();
            }
            return result;
        }

        public async Task<CourseDisplayDetail> GetById(int id)
        {
            string command = courseRepository.GetCourseById();
            var result = new CourseDisplayDetail();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@id", id);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {

                    result.id = Convert.ToInt32(reader["id"]);
                    result.language_id = Convert.ToInt32(reader["language_id"]);
                    result.language_name = reader["language_name"].ToString();
                    result.course_name = reader["course_name"].ToString();
                    result.price = Convert.ToDecimal(reader["price"]);
                    result.image_file = reader["image_file"].ToString();
                    result.description = reader["description"].ToString();
                    
                }
                await _db.CloseAsync();
            }
            return result;
        }
    }
}

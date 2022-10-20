
using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
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

        public async Task<List<CourseDisplay>> GetByCategory(int languageId)
        {
            string command = courseRepository.GetCourseByCategory();
            var result = new List<CourseDisplay>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@IdLanguage", languageId);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new CourseDisplay
                    {
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
            string command = courseRepository.GetCourseById();
            var result = new List<CourseDisplay>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@idLanguage", languageId);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new CourseDisplay
                    {
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

        public async Task<List<CourseDisplayDetail>> GetById(int id)
        {
            string command = courseRepository.GetCourseById();
            var result = new List<CourseDisplayDetail>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@id", id);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new CourseDisplayDetail
                    {
                        language_name = reader["language_name"].ToString(),
                        course_name = reader["course_name"].ToString(),
                        price = Convert.ToDecimal(reader["price"]),
                        image_file = reader["image_file"].ToString(),
                        description = reader["description"].ToString()
                    }); ;
                }
                await _db.CloseAsync();
            }
            return result;
        }
    }
}

using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Service.Interface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository studentRepository;
        private readonly SqlConnection _db;
        public StudentService(IStudentRepository studentRepository)
        {
            this.studentRepository = studentRepository;
            _db = new SqlConnection("LanguageAppCon");
        }

        public async Task<bool> CreateStudent(Student student)
        {
            var command = studentRepository.CreateStudent();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@name", student.name);
                cmd.Parameters.AddWithValue("@email", student.email);
                cmd.Parameters.AddWithValue("@password", student.password);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

        public async Task<bool> IsEmailThere(string email)
        {
            var command = studentRepository.IsEmailThere();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@email", email);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    if (Convert.ToInt16(reader["count(1)"]) == 1)
                    {
                        return true;
                    }
                }
                await _db.CloseAsync();
            }
            return false;
        }

        public async Task<bool> LoginStudent(string email, string password)
        {
            var command = studentRepository.LoginStudent();
            using(SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@email", email);
                cmd.Parameters.AddWithValue("@password", password);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    string resEmail = reader["email"].ToString();
                    string resPassword = reader["password"].ToString();
                    if (resEmail == email && resPassword == password)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                await _db.CloseAsync();
                return false;
            }
        }

        public async Task<bool> UpdateStudent(int id, string password)
        {
            var command = studentRepository.UpdateStudent();
            using(SqlCommand cmd=new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@password", password);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }
    }
}

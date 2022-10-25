using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Org.BouncyCastle.Crypto.Generators;
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
        public StudentService(IStudentRepository studentRepository, IConfiguration configuration)
        {
            this.studentRepository = studentRepository;
            _db = new SqlConnection(configuration.GetConnectionString("LanguageAppCon"));
        }

        public async Task<bool> CreateStudent([FromBody] Student student)
        {
            var command = studentRepository.CreateStudent();
            string pwdHashed = BCrypt.Net.BCrypt.HashPassword(student.password);
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@name", student.name);
                cmd.Parameters.AddWithValue("@email", student.email);
                cmd.Parameters.AddWithValue("@password", pwdHashed);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

        public async Task<List<UserLogin>> GetPass(string email)
        {
            string command = studentRepository.GetPassword();
            var result = new List<UserLogin>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@Email", email);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new UserLogin
                    {
                        email = reader["Email"].ToString(),
                        password = reader["Password"].ToString(),
                    });
                }
                await _db.CloseAsync();
            }
            return result;
        }

        public async Task<string> LoginStudent([FromBody] UserLogin student)
        {
            var command = studentRepository.LoginStudent();
            string result = "";
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                cmd.Parameters.AddWithValue("@email", student.email);
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    string resEmail = reader["email"].ToString();
                    string resPassword = reader["password"].ToString();
                    if (resEmail == student.email && BCrypt.Net.BCrypt.Verify(student.password, resPassword) == true)
                    {
                        result = "You've been logged in";
                    }
                    else
                    {
                        result = "Account Invalid!";
                    }
                }
                await _db.CloseAsync();

            }
            return result;
        }

        public async Task<bool> UpdateStudent([FromBody] UserLogin student)
        {
            var command = studentRepository.UpdateStudent();
            string pwdHashed = BCrypt.Net.BCrypt.HashPassword(student.password);
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@email", student.email);
                cmd.Parameters.AddWithValue("@password", pwdHashed);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }
    }
}

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
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class CartService : ICartService
    {
        private readonly ICartRepository cartRepository;
        private readonly SqlConnection _db;
        public CartService(ICartRepository cartRepository, IConfiguration configuration)
        {
            this.cartRepository = cartRepository;
            _db = new SqlConnection(configuration.GetConnectionString("LanguageAppCon"));
        }

        public async Task<bool> CreateCart(Cart cart)
        {
            var command = cartRepository.CreateCart();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@student_id", cart.student_id);
                cmd.Parameters.AddWithValue("@course_id", cart.course_id);
                cmd.Parameters.AddWithValue("@schedule", cart.schedule);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

        public async Task<bool> DeleteCart(int student_id, int course_id)
        {
            var command = cartRepository.DeleteCart();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@student_id", student_id);
                cmd.Parameters.AddWithValue("@course_id", course_id);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

        public async Task<List<CartDisplay>> GetCartById(int student_id)
        {
            string command = cartRepository.GetCartById();
            var result = new List<CartDisplay>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", student_id);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();

                while (reader.Read())
                {
                    result.Add(new CartDisplay
                    {
                        language_name = reader["language_name"].ToString(),
                        course_name = reader["course_name"].ToString(),
                        schedule = DateOnly.FromDateTime(Convert.ToDateTime(reader["schedule"])),
                        price = Convert.ToDecimal(reader["price"])
                    });
                }
                await _db.CloseAsync();
            }
            return result;
        }
    }
}

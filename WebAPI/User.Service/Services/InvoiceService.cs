using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection.PortableExecutable;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class InvoiceService : IInvoiceService
    {
        private readonly IInvoiceRepository invoiceRepository;
        private readonly IStudentClassRepository studentClassRepository;
        private readonly SqlConnection _db;
        public InvoiceService(IInvoiceRepository invoiceRepository)
        {
            this.invoiceRepository = invoiceRepository;
            _db = new SqlConnection("LanguageAppCon");
        }
        public async Task<bool> CreateInvoice(string id, int student_id, DateOnly invoice_date, decimal total_price)
        {
            var command = invoiceRepository.CreateInvoice();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@student_id", student_id);
                cmd.Parameters.AddWithValue("@invoice_date", invoice_date);
                cmd.Parameters.AddWithValue("@total_price", total_price);
                await _db.OpenAsync();
                await cmd.ExecuteNonQueryAsync();
                await _db.CloseAsync();
            }
            return true;
        }

        public async Task<List<DetailInvoice>> GetDetailInvoice(string id)
        {
            var command = invoiceRepository.CreateInvoice();
            var result = new List<DetailInvoice>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new DetailInvoice
                    {
                        course_name = reader["course_name"].ToString(),
                        language_name = reader["language_name"].ToString(),
                        schedule = DateOnly.FromDateTime(Convert.ToDateTime(reader["schedule"])),
                        price = Convert.ToDecimal(reader["price"])
                    });
                    
                }
                await _db.CloseAsync();
                return result;
            }
        }
        public async Task<List<InvoiceDisplay>> GetMyInvoices(int student_id)
        {
            var command = invoiceRepository.CreateInvoice();
            var result = new List<InvoiceDisplay>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@student_id", student_id);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new InvoiceDisplay
                    {
                        id = reader["id"].ToString(),
                        date = DateOnly.FromDateTime(Convert.ToDateTime(reader["date"])),
                        total_price = Convert.ToDecimal(reader["total_price"])
                    });
                    
                }
                await _db.CloseAsync();
            }
            command = studentClassRepository.GetClassCount();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                foreach(var x in result)
                {
                    cmd.Parameters.AddWithValue("@invoice_id",x.id);
                    await _db.OpenAsync();
                    SqlDataReader reader = await cmd.ExecuteReaderAsync();
                    while (reader.Read())
                    {
                        x.amount = Convert.ToInt16(reader["amount"]);
                    }
                    await _db.CloseAsync();
                }
            }
            return result;
        }
    }
}

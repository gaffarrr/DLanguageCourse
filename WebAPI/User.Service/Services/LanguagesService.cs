using DLanguage.Data.Interface.Repositories;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Services
{
    public class LanguagesService : ILanguageService
    {
        private readonly ILanguageRepository languageRepository;
        private readonly SqlConnection _db;
        public LanguagesService(ILanguageRepository languageRepository)
        {
            this.languageRepository = languageRepository;
            _db = new SqlConnection("LanguageAppCon");
        }
        public async Task<Language> GetLanguageById(int id)
        {
            var command = languageRepository.GetLanguageById();
            var result = new Language();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                cmd.Parameters.AddWithValue("@id", id);
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.language_name = reader["language_name"].ToString();
                    result.description = reader["description"].ToString();
                    result.flag = reader["flag"].ToString();
                    result.banner_file = reader["banner_file"].ToString();
                   
                }
                await _db.CloseAsync();
                return result;
            }
        }

        public async Task<List<Language>> GetLanguagesFlag()
        {
            var command = languageRepository.GetLanguageFlagList();
            var result = new List<Language>();
            using (SqlCommand cmd = new SqlCommand(command, _db))
            {
                await _db.OpenAsync();
                SqlDataReader reader = await cmd.ExecuteReaderAsync();
                while (reader.Read())
                {
                    result.Add(new Language
                    {
                        language_name = reader["language_name"].ToString(),
                        flag = reader["flag"].ToString()
                    });
                }
                await _db.CloseAsync();
                return result;
            }
        }
    }
}

using DLanguage.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface ILanguageService
    {
        public Task<Language> GetLanguageById(int id);
        public Task<List<Language>> GetLanguagesFlag();
    }
}

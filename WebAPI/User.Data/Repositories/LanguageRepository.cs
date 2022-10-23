using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Repositories
{
    internal class LanguageRepository : ILanguageRepository
    {
        public string GetLanguageById()
        {
            var result = "select id, language_name, description, flag, banner_file from languages where id=@id";
            return result;
        }

        public string GetLanguageFlagList()
        {
            var result = "select id, language_name, flag from languages";
            return result;
        }
    }
}

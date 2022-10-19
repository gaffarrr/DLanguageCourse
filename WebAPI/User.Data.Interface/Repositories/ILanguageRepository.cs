using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Interface.Repositories
{
    public interface ILanguageRepository
    {
        public string GetLanguageById();
        public string GetLanguageFlagList();
    }
}

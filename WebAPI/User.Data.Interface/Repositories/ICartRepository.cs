using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Interface.Repositories
{
    public interface ICartRepository
    {
        public string CreateCart();
        public string GetCartById();
        public string DeleteCart();
    }
}

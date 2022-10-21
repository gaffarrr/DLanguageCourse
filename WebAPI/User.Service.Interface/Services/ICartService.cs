using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Service.Interface.Services
{
    public interface ICartService
    {
        public Task<bool> CreateCart(Cart cart);
        public Task<bool> DeleteCart(int student_id, int course_id);
        public Task<List<CartDisplay>> GetCartById(int student_id);
    }
}

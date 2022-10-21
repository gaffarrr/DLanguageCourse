using DLanguage.Data.Interface.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DLanguage.Data.Repositories
{
    public class CartRepository : ICartRepository
    {
        public string CreateCart()
        {
            var result = "insert into cart values @student_id,@course_id,@schedule";
            return result;
        }

        public string DeleteCart()
        {
            var result = "delete from cart where student_id=@student_id and course_id=@course_id";
            return result;
        }

        public string GetCartById()
        {
            var result = "select x.language_name,y.course_name,z.schedule,y.price from languages x " +
                "inner join courses y on x.id=y.language_id " +
                "inner join cart z on z.course_id=y.id " +
                "where z.student_id=@id";
            return result;

        }
    }
}

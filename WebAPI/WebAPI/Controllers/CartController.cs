using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService cartService;
        public CartController(ICartService cartService)
        {
            this.cartService = cartService;
        }
        [HttpPost]
        public async Task<IActionResult> CreateCart([FromBody]Cart cart)
        {
            var result = await cartService.CreateCart(cart);
            return Ok(result);
        }
        [HttpDelete("{student_id:int}/{course_id:int}")]
        public async Task<IActionResult> DeleteCart(int student_id,int course_id)
        {
            var result = await cartService.DeleteCart(student_id, course_id);
            return Ok(result);
        }
        [HttpGet("{student_id:int}")]
        public async Task<List<CartDisplay>> GetCartById(int student_id)
        {
            var result = await cartService.GetCartById(student_id);
            return result;
        }
    }
}

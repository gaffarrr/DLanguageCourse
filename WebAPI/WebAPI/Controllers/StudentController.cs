using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using DLanguage.Service.Interface.Services;
using System.Threading.Tasks;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;

namespace WebAPI.Controllers
{
    public class StudentController : ControllerBase
    {
        [Route("api/Student/[controller]")]
        [ApiController]
        public class LanguageController : ControllerBase
        {
            private readonly IStudentService studentService;
            public LanguageController(IStudentService studentService)
            {
                this.studentService = studentService;
            }
            [HttpPost]
            public async Task<IActionResult> CreateStudent([FromBody]Student student)
            {
                var result = await studentService.CreateStudent(student);
                return Ok(result);
            }
            [HttpPost("{email:string}")]
            public async Task<IActionResult> IsEmailThere(string email)
            {
                var result = await studentService.IsEmailThere(email);
                return Ok(result);
            }
            [HttpPost("login")]
            public async Task<IActionResult> LoginStudent([FromBody]UserLogin x)
            {
                var result = await studentService.LoginStudent(x.email, x.password);
                return Ok(result);
            }
            [HttpPut("{id:int}/{password:string}")]
            public async Task<IActionResult> UpdateStudent(int id,string password)
            {
                var result = await studentService.UpdateStudent(id, password);
                return Ok(result);
            }
            
        }
    }
}

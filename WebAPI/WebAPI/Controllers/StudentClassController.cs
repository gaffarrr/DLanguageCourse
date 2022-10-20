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
    public class StudentClassController : ControllerBase
    {
        private readonly IStudentClassService studentClassService;
        public StudentClassController(IStudentClassService studentClassService)
        {
            this.studentClassService = studentClassService;
        }
        [HttpPost]
        public async Task<IActionResult> CreateRelation([FromBody]StudentClass x)
        {
            var result = await studentClassService.CreateRelation(x.student_id, x.course_id, x.schedule, x.invoice_id);
            return Ok(result);
        }
        [HttpGet("{id:int}")]
        public async Task<List<ClassList>> GetClassLists(int id)
        {
            return await studentClassService.GetClassLists(id);
        }
    }
}

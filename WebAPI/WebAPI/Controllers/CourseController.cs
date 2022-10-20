using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using DLanguage.Service.Interface.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService courseService;
        public CourseController(ICourseService courseService)
        {
            this.courseService=courseService;
        }
        [HttpGet("courses")]
        public async Task<List<Course>> Get()
        {
            var result = await courseService.Get();
            return result;
        }
        [HttpGet("{language_id:int}")]
        public async Task<List<CourseDisplay>> GetByCategory(int language_id)
        {
            return await courseService.GetByCategory(language_id);
        }
        [HttpGet("detail/{id:int}")]
        public async Task<List<CourseDisplayDetail>> GetById(int id)
        {
            return await courseService.GetById(id);
        }
        [HttpGet("{languageid:int}/{id:int}")]
        public async Task<List<CourseDisplay>> GetByCategoryExceptCurrent(int languageid,int id)
        {
            return await courseService.GetByCategoryExceptCurrent(languageid, id);
        }
    }
}

using DLanguage.Model.Entities;
using DLanguage.Service.Interface.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleService scheduleService;
        public ScheduleController(IScheduleService scheduleService)
        {
            this.scheduleService = scheduleService;
        }
        [HttpGet("{id:int}")]
        public async Task<List<Schedules>> GetDatesById(int id)
        {
            return await scheduleService.GetDatesById(id);
        }
    }
}

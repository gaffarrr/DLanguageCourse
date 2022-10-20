using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using DLanguage.Model.Entities;
using DLanguage.Service.Interface.Services;

namespace WebAPI.Controllers
{
    [Route("api/Languages/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly ILanguageService languageService;
        public LanguageController(ILanguageService languageService)
        {
            this.languageService=languageService;
        }

        [HttpGet("{i:int}")]
        public async Task<Language> GetLanguagesById(int i)
        {
            var list=await languageService.GetLanguageById(i);
            return list;
        }
        [HttpGet("/flags")]
        public async Task<List<Language>> GetLanguagesFlag()
        {
            var list = await languageService.GetLanguagesFlag();
            return list;
        }
    }
}

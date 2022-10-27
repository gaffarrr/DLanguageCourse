using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using DLanguage.Service.Interface.Services;
using System.Threading.Tasks;
using DLanguage.Model.Entities;
using DLanguage.Model.Entities.SubEntities;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    public class StudentController : ControllerBase
    {
        private readonly IStudentService studentService;
        private readonly IConfiguration _config;
        public StudentController(IStudentService studentService, IConfiguration config)
        {
            this.studentService = studentService;
            _config = config;
        }

        private string GenerateJSONWebToken()
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              null,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [Route("Api/[controller]/Register")]
        [HttpPost]
        public async Task<ActionResult> CreateStudent([FromBody] Student student)
        {
            var result = await studentService.CreateStudent(student);
            return Ok(result);
        }
        [Route("Api/[controller]/ResetPassword")]
        [HttpPost]
        public async Task<List<UserLogin>> GetEmail([FromBody] GetEmail email)
        {
            List<UserLogin> result = await studentService.GetPass(email.email);
            return result;
        }
        [Route("Api/[controller]/Login")]
        [HttpPost]
        public async Task<IActionResult> LoginStudent([FromBody] UserLogin student)
        {
            IActionResult response = Unauthorized();
            var result = await studentService.LoginStudent(student);
            if (result == "You've been logged in")
            {
                var tokenString = GenerateJSONWebToken();
                response = Ok(new { token = tokenString });
            }
            return response;
        }
        [Route("Api/[controller]/ResetPassword/NewPass")]
        [HttpPut]
        public async Task<IActionResult> UpdateStudent([FromBody] UserLogin student)
        {
            await studentService.UpdateStudent(student);
            return Ok("Password has been reset!");
        }
    
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace WebAPI.Controllers
{
    public class UserController : ControllerBase
    {
        [Route("api/User/[controller]")]
        [ApiController]
        public class LanguageController : ControllerBase
        {
            private readonly IConfiguration _configuration;
            public LanguageController(IConfiguration configuration)
            {
                _configuration = configuration;
            }

            [HttpGet]
            public JsonResult Get()
            {
                string query = @"select langId, langName, langDesc, langFlag from languages";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("LanguageAppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myComm = new SqlCommand(query, myCon))
                    {
                        myReader = myComm.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult(table);
            }
        }
    }
}

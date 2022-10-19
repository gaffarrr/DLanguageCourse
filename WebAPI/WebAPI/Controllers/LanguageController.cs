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

namespace WebAPI.Controllers
{
    [Route("api/Languages/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public LanguageController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("{i:int}")]
        public List<Language> GetLanguagesById(int i)
        {
            
            string query = @"select language_name, description, flag, banner_file from languages where id=@id";
            string sqlDataSource = _configuration.GetConnectionString("LanguageAppCon");
            SqlDataReader myReader; 
            List<Language> list = new List<Language>();
            using(SqlConnection myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    while (myReader.Read())
                    {
                        var language = new Language();
                        language.language_name = myReader["language_name"].ToString();
                        language.description = myReader["description"].ToString();
                        language.flag = myReader["flag"].ToString();
                        language.banner_file = myReader["banner_file"].ToString();
                        list.Add(language);
                    }
                }
            }
                
            /*using(SqlConnection myCon=new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myComm = new SqlCommand(query, myCon))
                {
                    myReader = myComm.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }**/
            return list;
        }
    }
}

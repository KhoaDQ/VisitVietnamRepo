using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using VisitVietnamAPI.Models;

namespace VisitVietnamAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public ArticleController(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _env = environment;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"Select * from Article";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VisitVietnamAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]

        public JsonResult Post(Article a)
        {
            string query = @"INSERT INTO Article(Name,Type,Description,PicFileName,Status) 
                            VALUES('" + a.Name + "','" + a.Type + "','" + a.Description + "','" + a.PicFileName + "','" + a.Status + "');";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VisitVietnamAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]

        public JsonResult Put(Article a)
        {
            string query = @"UPDATE Article SET
                            Name = '" + a.Name + "', " +
                            "Type='" + a.Type + "'," +
                            "Description='" + a.Description + "', " +
                            "PicFileName='" + a.PicFileName + "'," +
                            "Status='" + a.Status + "' " +
                            "WHERE Id = '" + a.Id + "';";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VisitVietnamAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @"DELETE FROM Article WHERE Id = '" + id + "';";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VisitVietnamAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }

        [Route("SaveFile")]
        [HttpPost]

        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string fileName = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + fileName;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(fileName);
            }
            catch (Exception)
            {
                return new JsonResult("anonymous.png");
            }
        }

        [Route("GetAllArticleEvent")]

        public JsonResult GetAllArticleEvent()
        {
            string query = @"Select * from Article where Type='Event'";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VisitVietnamAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [Route("GetAllArticleTopPickMaster")]

        public JsonResult GetAllArticleTopPickMaster()
        {
            string query = @"Select * from Article where Type='Top pick master'";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("VisitVietnamAppCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}

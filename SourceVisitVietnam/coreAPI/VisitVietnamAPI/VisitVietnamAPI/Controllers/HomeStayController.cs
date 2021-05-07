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
    public class HomeStayController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public HomeStayController(IConfiguration configuration,IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _env = environment;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"Select * from HomeStay";

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

        public JsonResult Post(HomeStay h)
        {
            string query = @"INSERT INTO HomeStay(Description,Type,AvgPrice,Comment,Star,PicFileName,PlaceId) 
                            VALUES('"+h.Description+"','"+h.Type+"','"+h.AvgPrice+"','"+h.Comment+"','"+h.Star+"','"+h.PicFileName+"','"+h.PlaceId+"');";
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

        public JsonResult Put(HomeStay h)
        {
            string query = @"UPDATE HomeStay SET
                            Description = '" + h.Description + "', " +
                            "Type='" + h.Type + "'," +
                            "AvgPrice='" + h.AvgPrice + "'," +
                            "Comment='" + h.Comment + "'," +
                            "Star='" + h.Star + "'," +
                            "PicFileName='" + h.PicFileName + "' " +
                            "WHERE PlaceId = '" + h.PlaceId + "';";

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
            string query = @"DELETE FROM HomeStay WHERE PlaceId = '" + id + "';";

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
    }
}

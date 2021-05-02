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
    public class FoodyController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public FoodyController(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _env = environment;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"Select * from Foody";

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

        public JsonResult Post(Foody f)
        {
            string query = @"INSERT INTO Foody(Name,Type,MiniType,Price,Note,PicFileName,PlaceId) 
                            VALUES('"+f.Name+"','"+f.Type+"','"+f.MiniType+"','"+f.Price+"','"+f.Note+"','"+f.PicFileName+"','"+f.PlaceId+"');";
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

        public JsonResult Put(Foody f)
        {
            string query = @"UPDATE Foody SET
                            Name = '" + f.Name + "', " +
                            "Type='" + f.Type + "'," +
                            "MiniType='" + f.MiniType + "'," +
                            "Price='" + f.Price + "'," +
                            "Note='" + f.Note + "'," +
                            "PicFileName='" + f.PicFileName + "'," +
                            "PlaceId='" + f.PlaceId + "' " +
                            "WHERE Id = '" + f.Id + "';";

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
            string query = @"DELETE FROM Foody WHERE Id = '" + id + "';";

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

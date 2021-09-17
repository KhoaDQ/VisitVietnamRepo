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
    public class PlaceEventController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public PlaceEventController(IConfiguration configuration, IWebHostEnvironment environment)
        {
            _configuration = configuration;
            _env = environment;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"Select * from PlaceEvent";

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

        public JsonResult Post(PlaceEvent p)
        {
            string query = @"INSERT INTO PlaceEvent(Name,Type,Description,PicFileName,Details,StartDate,EndDate,Status,PlaceId) 
                            VALUES('" + p.Name + "','" + p.Type + "','" + p.Description + "','" + p.PicFileName + "','" + p.Details + "','" + p.StartDate + "','" + p.EndDate + "','" + p.Status + "','" + p.PlaceId + "');";
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

        public JsonResult Put(PlaceEvent p)
        {
            string query = @"UPDATE PlaceEvent SET
                            Name = '" + p.Name + "', " +
                            "Type='" +p.Type + "'," +
                            "Description='" + p.Description + "', " +
                            "Details='" + p.Details + "'," +
                            "StartDate='" + p.StartDate + "'," +
                            "EndDate='" + p.EndDate + "'," +
                            "PicFileName='" + p.PicFileName + "'," +
                            "Status='" + p.Status + "'," +
                            "PlaceId='" + p.PlaceId + "' " +
                            "WHERE Id = '" + p.Id + "';";

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
            string query = @"DELETE FROM PlaceEvent WHERE Id = '" + id + "';";

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

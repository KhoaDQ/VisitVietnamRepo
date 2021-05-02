using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VisitVietnamAPI.Models
{
    public class Location
    {
        public int Id { get; set; }
        public string Details { get; set; }
        public string Street { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public int PlaceId { get; set; }
    }
}

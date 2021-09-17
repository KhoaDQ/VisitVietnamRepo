using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VisitVietnamAPI.Models
{
    public class HomeStay
    {
        public string Description { get; set; }
        public string Type { get; set; }
        public string AvgPrice { get; set; }
        public string Comment { get; set; }
        public string Star { get; set; }
        public int PlaceId { get; set; }
        public string PicFileName { get; set; }
    }
}

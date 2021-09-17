using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VisitVietnamAPI.Models
{
    public class Foody
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string MiniType { get; set; }
        public string Price { get; set; }
        public string Note { get; set; }
        public int PlaceId { get; set; }
        public string PicFileName { get; set; }
    }
}

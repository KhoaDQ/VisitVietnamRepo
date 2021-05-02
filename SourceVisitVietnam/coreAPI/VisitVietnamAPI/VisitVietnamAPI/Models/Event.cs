using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VisitVietnamAPI.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string PicFileName { get; set; }
        public string Details { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Status { get; set; }
    }
}

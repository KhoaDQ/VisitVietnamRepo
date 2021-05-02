using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VisitVietnamAPI.Models
{
    public class Place
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Slogan { get; set; }
        public string Overview { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Facebook { get; set; }
        public string LinkWeb { get; set; }
        public int EventOfPlace { get; set; }
        public string PicFileName { get; set; }

    }
}

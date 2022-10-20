namespace DLanguage.Model.Entities
{
    public class Course
    {
        public int id { get; set; }
        public string course_name { get; set; }
        public int language_id { get; set; }
        public string description { get; set; }
        public decimal price { get; set; }
        public string image_file { get; set; }
    }
}

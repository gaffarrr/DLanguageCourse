namespace DLanguage.Model.Entities
{
    public class Course
    {
        public int IdCourse { get; set; }
        public string CourseName { get; set; }
        public int IdLanguage { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
    }
}

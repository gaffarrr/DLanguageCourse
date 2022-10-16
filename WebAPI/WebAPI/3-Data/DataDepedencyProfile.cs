using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI._3_Data.Data;
using WebAPI._3_Data.Data.Interface;

namespace WebAPI._3_Data
{
    public class DataDepedencyProfile
    {
        public static void Register (IConfiguration configuration, IServiceCollection services)
        {
            services.AddScoped<ICourseRepository, CourseRepository>();
            services.AddScoped<IInvoiceRepository, InvoiceRepository>();
            services.AddScoped<IStudentRepository, StudentRepository>();

        }
    }
}

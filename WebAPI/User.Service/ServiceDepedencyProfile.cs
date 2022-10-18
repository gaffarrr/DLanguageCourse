using DLanguage.Service.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI._2_Service.Service.Interface;

namespace DLanguage.Service
{
    public class ServiceDepedencyProfile
    {
        public static void Register(IConfiguration configuration, IServiceCollection services)
        {
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<IInvoiceService, InvoiceService>();
            services.AddScoped<IStudentService, StudentService>();

        }
    }
}

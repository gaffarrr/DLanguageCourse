using DLanguage.Service.Interface.Services;
using DLanguage.Service.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DLanguage.Service
{
    public class ServiceDependencyProfile
    {
        public static void Register(IConfiguration configuration, IServiceCollection services)
        {
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<IInvoiceService, InvoiceService>();
            services.AddScoped<IStudentService, StudentService>();
            services.AddScoped<ILanguageService,LanguagesService>();
            services.AddScoped<IStudentClassService, StudentClassService>();
            services.AddScoped<IScheduleService,SchedulesService>();
            services.AddScoped<ICartService, CartService>();

        }
    }
}

using Flashcards.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Flashcards.Infrastucture
{
    public static class ApplicationBuilderExtensions
    {
        public static void ApplyMigrations(this Microsoft.AspNetCore.Builder.IApplicationBuilder app)
        {
            using var services = app.ApplicationServices.CreateScope();

            var dbContext = services.ServiceProvider.GetService<FlashcardsDbContext>();

            dbContext.Database.Migrate();
        }
    }
}

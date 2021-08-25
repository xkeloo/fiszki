
using Microsoft.Extensions.Configuration;

namespace Flashcards.Infrastucture
{
    public static class ConfigurationExtensions
    {
        public static string GetDefaultConnectionString(this IConfiguration configuration)
            => configuration.GetConnectionString("DefaultConnection");
    }
}

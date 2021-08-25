using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Flashcards.Data.Models
{
    public class User : IdentityUser
    {
        public IEnumerable<Flashcard> Flashcards { get; } = new HashSet<Flashcard>();
    }
}

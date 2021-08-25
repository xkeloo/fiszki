using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flashcards.Features.Flashcards.Models
{
    public class FlashcardListingModel
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public bool ToRemind { get; set; }
    }
}

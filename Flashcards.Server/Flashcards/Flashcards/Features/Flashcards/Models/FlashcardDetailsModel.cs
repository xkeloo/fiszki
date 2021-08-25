
namespace Flashcards.Features.Flashcards.Models
{
    public class FlashcardDetailsModel : FlashcardListingModel
    {
        public string Answer { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
    }
}

namespace Flashcards.Features.Flashcards.Models
{
    public class UpdateFlashcardRequestModel
    {
        public int Id { get; set; }
        public string Question { get; set; }

        public string Answer { get; set; }
        public bool ToRemind { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace Flashcards.Features.Flashcards.Models
{
    using static Data.Validation.Flashcard;
    public class CreateFlashcardModel
    {
        [Required]
        [MaxLength(MaxQuestionLength)]
        public string Question { get; set; }
        [Required]
        [MaxLength(MaxAnswerLength)]
        public string Answer { get; set; }
    }
}

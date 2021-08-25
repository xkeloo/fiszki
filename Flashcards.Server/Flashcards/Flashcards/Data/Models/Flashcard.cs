using System.ComponentModel.DataAnnotations;

namespace Flashcards.Data.Models
{
    using static Validation.Flashcard;
    public class Flashcard
    {

        public int Id { get; set; }
        [Required]
        [MaxLength(MaxQuestionLength)]
        public string Question { get; set; }
        [Required]
        [MaxLength(MaxAnswerLength)]
        public string Answer { get; set; }
        [Required]
        public bool ToRemind { get; set; }
        [Required]
        public string UserId { get; set; }
        public User User { get; set; }
    }
}


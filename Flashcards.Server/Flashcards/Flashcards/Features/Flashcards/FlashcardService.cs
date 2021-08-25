using Flashcards.Data;
using Flashcards.Data.Models;
using Flashcards.Features.Flashcards.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Flashcards.Features.Flashcards
{
    public class FlashcardService : IFlashcardService
    {
        private readonly FlashcardsDbContext data;

        public FlashcardService(FlashcardsDbContext data)
            => this.data = data;

        public async Task<IEnumerable<FlashcardListingModel>> ByUser(string userId)
            => await this.data
                .Flashcards
                .Where(f => f.UserId == userId)
                .Select(f => new FlashcardListingModel
                {
                    Id = f.Id,
                    Question = f.Question,
                    ToRemind = f.ToRemind
                })
                .ToListAsync();

        public async Task<FlashcardDetailsModel> Details(int id)
            => await this.data
                .Flashcards
                .Where(f => f.Id == id)
                .Select(f => new FlashcardDetailsModel
                {
                    Id = f.Id,
                    UserId = f.UserId,
                    Answer = f.Answer,
                    Question = f.Question,
                    ToRemind = f.ToRemind,
                    UserName = f.User.UserName
                })
                .FirstOrDefaultAsync();

        public async Task<int> Create(string question, string answer, string userId)
        {
            var flashcard = new Flashcard
            {
                Question = question,
                Answer = answer,
                ToRemind = true,
                UserId = userId
            };

            this.data.Add(flashcard);

            await this.data.SaveChangesAsync();

            return flashcard.Id;
        }

        public async Task<bool> Update(int id, string question, string answer, bool toRemind, string userId)
        {
            var flashcard = await this.ByIdAndByUserId(id, userId);

            if (flashcard == null)
            {
                return false;
            }

            flashcard.Question = question;
            flashcard.Answer = answer;
            flashcard.ToRemind = toRemind;

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Delete(int id, string userId)
        {
            var flashcard = await this.ByIdAndByUserId(id, userId);

            if (flashcard == null)
            {
                return false;
            }

            this.data.Flashcards.Remove(flashcard);

            await this.data.SaveChangesAsync();

            return true;
        }

        private async Task<Flashcard> ByIdAndByUserId(int id, string userId)
            => await this.data
                .Flashcards
                .Where(f => f.Id == id && f.UserId == userId)
                .FirstOrDefaultAsync();

    }
}

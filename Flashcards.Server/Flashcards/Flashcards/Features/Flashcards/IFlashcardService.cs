using Flashcards.Features.Flashcards.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Flashcards.Features.Flashcards
{
    public interface IFlashcardService
    {
        public Task<int> Create(string question, string answer, string userId);

        public Task<IEnumerable<FlashcardListingModel>> ByUser(string userId);

        public Task<FlashcardDetailsModel> Details(int id);

        public Task<bool> Update(int id, string question, string answer, bool toRemind, string userId);

        public Task<bool> Delete(int id, string userId);
    }
}

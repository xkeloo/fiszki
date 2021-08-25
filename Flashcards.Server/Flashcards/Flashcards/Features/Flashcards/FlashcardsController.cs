using Flashcards.Features.Flashcards.Models;
using Flashcards.Infrastucture;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Flashcards.Features.Flashcards
{
    [Authorize]
    public class FlashcardsController : ApiController
    {
        private readonly IFlashcardService flashcardService;

        public FlashcardsController(IFlashcardService flashcardService) => this.flashcardService = flashcardService;

        [HttpGet]
        public async Task<IEnumerable<FlashcardListingModel>> Mine()
        {
            var userId = this.User.GetId();

            return await this.flashcardService.ByUser(userId);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<FlashcardDetailsModel>> Details(int id)
        {
            var flashcard = await this.flashcardService.Details(id);

            if (flashcard == null)
            {
                return NotFound();
            }

            return flashcard;
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateFlashcardModel model)
        {
            var userId = this.User.GetId();

            var id = await this.flashcardService.Create(model.Question, model.Answer, userId);

            return Created(nameof(this.Create), id);
        }

        [HttpPut]
        public async Task<ActionResult> Update(UpdateFlashcardRequestModel model)
        {
            var userId = this.User.GetId();

            var updated = await this.flashcardService.Update(model.Id,
                                                             model.Question,
                                                             model.Answer,
                                                             model.ToRemind,
                                                             userId);

            if (!updated)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.User.GetId();

            var deleted = await this.flashcardService.Delete(id, userId);

            if (!deleted)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}

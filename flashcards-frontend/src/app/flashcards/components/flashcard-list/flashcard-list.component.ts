import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashcardListModel } from '../../models/FlashcardListModel';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss']
})
export class FlashcardListComponent implements OnInit {
  flashcards: Array<FlashcardListModel>

  constructor(private flashcardService: FlashcardService, private router: Router) { 
    this.flashcards = [];
  }

  ngOnInit(): void {
    this.fetchFlashcards();
  }

  fetchFlashcards() {
    this.flashcardService.getFlashcards().subscribe(flashcards => {
      this.flashcards = flashcards;
      console.log(this.flashcards)
    })
  }

  deleteFlashcard(id: number) {
    this.flashcardService.deleteFlashcard(id).subscribe(res => {
      this.fetchFlashcards();
    })
  }

  editFlashcard(id: number) {
    this.router.navigate(["flashcards", id ,"edit"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashcardListModel } from '../../models/FlashcardListModel';
import { FlashcardModel } from '../../models/FlashcardModel';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard-quiz',
  templateUrl: './flashcard-quiz.component.html',
  styleUrls: ['./flashcard-quiz.component.scss']
})
export class FlashcardQuizComponent implements OnInit {
  flashcards!: Array<FlashcardListModel>
  activeFlashcard!: FlashcardModel
  index: number
  answerVisible: boolean
  score: number
  finished: boolean

  constructor(private flashcardService: FlashcardService, private router: Router) { 
    this.index = -1;
    this.answerVisible = false;
    this.score = 0;
    this.finished = false;
    this.fetchFlashcards();  
  }

  ngOnInit(): void {
      
  }

  fetchFlashcards() {
    this.flashcardService.getFlashcards().subscribe(flashcards => {
      this.flashcards = flashcards;
      this.shuffleArray(this.flashcards);
      console.log(this.flashcards);
      if(this.flashcards.length != 0)    
        this.flashcardService.getFlashcard(this.flashcards[0].id).subscribe(res => {
          this.activeFlashcard = res;
          this.index = 0;
      });
    })
  }

  getNextFlashcard(): void {
    if(this.index + 1 < this.flashcards.length) {
      this.flashcardService.getFlashcard(this.flashcards[this.index + 1].id).subscribe(res => {
        this.activeFlashcard = res;
        console.log(this.activeFlashcard);
        this.index++;
        this.answerVisible = false;
      });
    } 
    if(this.index + 1 == this.flashcards.length) 
      this.finished = true; 
  }

  makeVisible() {
    this.answerVisible = true;
    console.log(this.answerVisible)
  }

  goodAnswer() {
    if(this.score < this.flashcards.length)
      this.score++;
    this.getNextFlashcard();
  }

  badAnswer() {
    this.getNextFlashcard();
  }

  shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      //[array[i], array[j]] =  [array[j], array[i]];
    }
  }
}

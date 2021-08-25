import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashcardModel } from '../../models/FlashcardModel';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard-details',
  templateUrl: './flashcard-details.component.html',
  styleUrls: ['./flashcard-details.component.scss']
})
export class FlashcardDetailsComponent implements OnInit {
  id!: number
  flashcard!: FlashcardModel;
  answerVisible: boolean;

  constructor(private route: ActivatedRoute, private flashcardService: FlashcardService) {
    this.answerVisible = false;
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.flashcardService.getFlashcard(this.id).subscribe(res => {
        this.flashcard = res;
      });
    })
   }

  ngOnInit(): void {
    
  }

  makeVisible() {
    this.answerVisible = true;
    console.log(this.answerVisible)
  }

}

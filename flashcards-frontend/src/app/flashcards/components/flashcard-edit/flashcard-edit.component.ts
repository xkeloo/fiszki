import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashcardModel } from '../../models/FlashcardModel';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard-edit',
  templateUrl: './flashcard-edit.component.html',
  styleUrls: ['./flashcard-edit.component.scss']
})
export class FlashcardEditComponent implements OnInit {
  flashcardForm: FormGroup;
  flashcardId!: number;
  flashcard!: FlashcardModel;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, 
    private flashcardService: FlashcardService,
    private router: Router
    ) {
    this.flashcardForm = this.fb.group({
      'id': [''],
      'question': [''],
      'answer': [''],
      'toRemind': ['']
    })
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flashcardId = params['id'];
      this.flashcardService.getFlashcard(this.flashcardId).subscribe(res => {
        this.flashcard = res;
        this.flashcardForm = this.fb.group({
          'id': [this.flashcard.id],
          'question': [this.flashcard.question],
          'answer': [this.flashcard.answer],
          'toRemind': [this.flashcard.toRemind]
        })
      })
    })
  }

  edit() {
    this.flashcardService.editFlashcard(this.flashcardForm.value).subscribe(res => {
      this.router.navigate(["flashcards"])
    })
  }
}

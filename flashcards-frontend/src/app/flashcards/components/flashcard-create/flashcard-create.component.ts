import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-flashcard-create',
  templateUrl: './flashcard-create.component.html',
  styleUrls: ['./flashcard-create.component.scss']
})
export class FlashcardCreateComponent implements OnInit {
  flashcardForm: FormGroup;

  constructor(private fb: FormBuilder, private flashcardService: FlashcardService, private router: Router) { 
    this.flashcardForm = this.fb.group({
      'question': ['', Validators.required],
      'answer': ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  create() {
    this.flashcardService.create(this.flashcardForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(["flashcards"]);
    })
  }

  get question() {
    return this.flashcardForm.get('question');
  }

  get answer() {
    return this.flashcardForm.get('answer');
  }

}

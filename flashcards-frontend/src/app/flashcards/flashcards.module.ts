import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlashcardCreateComponent } from './components/flashcard-create/flashcard-create.component';
import { FlashcardEditComponent } from './components/flashcard-edit/flashcard-edit.component';
import { FlashcardDetailsComponent } from './components/flashcard-details/flashcard-details.component';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { FlashcardMenuComponent } from './components/flashcard-menu/flashcard-menu.component';
import { FlashcardQuizComponent } from './components/flashcard-quiz/flashcard-quiz.component';




@NgModule({
  declarations: [
    FlashcardCreateComponent,
    FlashcardEditComponent,
    FlashcardDetailsComponent,
    FlashcardListComponent,
    FlashcardMenuComponent,
    FlashcardQuizComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class FlashcardsModule { }

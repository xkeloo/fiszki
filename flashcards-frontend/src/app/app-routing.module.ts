import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authorization/components/login/login.component';
import { RegistrationComponent } from './authorization/components/registration/registration.component';
import { FlashcardCreateComponent } from './flashcards/components/flashcard-create/flashcard-create.component';
import { FlashcardDetailsComponent } from './flashcards/components/flashcard-details/flashcard-details.component';
import { FlashcardEditComponent } from './flashcards/components/flashcard-edit/flashcard-edit.component';
import { FlashcardListComponent } from './flashcards/components/flashcard-list/flashcard-list.component';
import { FlashcardMenuComponent } from './flashcards/components/flashcard-menu/flashcard-menu.component';
import { FlashcardQuizComponent } from './flashcards/components/flashcard-quiz/flashcard-quiz.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'menu', component: FlashcardMenuComponent, canActivate: [AuthGuardService] },
  { path: 'create', component: FlashcardCreateComponent, canActivate: [AuthGuardService] },
  { path: 'flashcards', component: FlashcardListComponent, canActivate: [AuthGuardService] },
  { path: 'test', component: FlashcardQuizComponent, canActivate: [AuthGuardService] },
  { path: 'flashcards/:id', component: FlashcardDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'flashcards/:id/edit', component: FlashcardEditComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

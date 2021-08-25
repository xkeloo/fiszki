import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardQuizComponent } from './flashcard-quiz.component';

describe('FlashcardQuizComponent', () => {
  let component: FlashcardQuizComponent;
  let fixture: ComponentFixture<FlashcardQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

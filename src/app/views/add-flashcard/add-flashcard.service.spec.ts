import { TestBed } from '@angular/core/testing';

import { AddFlashcardService } from './add-flashcard.service';

describe('AddFlashcardService', () => {
  let service: AddFlashcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFlashcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Flashcard } from 'src/app/shared/interfaces';
import { AddFlashcardService } from './add-flashcard.service';

interface Fruit {
  name: string;
}
@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss'],
})
export class AddFlashcardComponent implements OnInit {
  constructor(private addFlashcardService: AddFlashcardService) {}
  flashcardGroup!: FormGroup;
  backlinks!: Flashcard[];
  properties$ = this.addFlashcardService.propertiesTemplate.pipe(
    tap((properties) => properties)
  );
  flashcards$ = this.addFlashcardService.flashcardsForWorkspace.pipe(
    tap((flashcards) => flashcards)
  );

  get propertiesControls() {
    return this.flashcardGroup.controls['properties'] as FormGroup;
  }

  addBacklink(flashcard: Flashcard) {
    this.addFlashcardService.addBacklink(flashcard);
    this.backlinks = this.addFlashcardService.backlinksArray;
  }
  removeBacklink(flashcard: Flashcard) {
    this.addFlashcardService.removeBacklink(flashcard);
    this.backlinks = this.addFlashcardService.backlinksArray;
  }

  submitForm() {
    this.flashcardGroup.markAllAsTouched();
    if (this.flashcardGroup.invalid) return;
    this.addFlashcardService.groupFormDataTogether(this.flashcardGroup.value);
  }

  ngOnInit(): void {
    this.flashcardGroup = this.addFlashcardService.createForm();
  }
}

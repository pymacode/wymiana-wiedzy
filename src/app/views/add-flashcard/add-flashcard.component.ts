import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface Fruit {
  name: string;
}
@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.scss'],
})
export class AddFlashcardComponent implements OnInit {
  constructor() {}
  stanowisko: string[] = ['Frontend', 'Backend'];
  framework: string[] = ['Angular', 'Spring', 'React', 'Vue'];
  flashcardsNames: string[] = [
    'Flashcard long title',
    'Flashcard',
    'Flashcard long third',
  ];

  stanowiskoVal = new FormControl('', [Validators.required]);

  getVal() {
    console.log(this.stanowiskoVal.value);
  }

  ngOnInit(): void {}
}

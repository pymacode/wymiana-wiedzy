import { Component, Input, OnInit, Inject } from '@angular/core';
import { Flashcard } from 'src/app/shared/interfaces';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.component.html',
  styleUrls: ['./flashcard-detail.component.scss'],
})
export class FlashcardDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public card: Flashcard) {}

  ngOnInit(): void {}
}

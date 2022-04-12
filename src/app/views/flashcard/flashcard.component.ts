import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/shared/interfaces';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlashcardDetailComponent } from '../flashcard-detail/flashcard-detail.component';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard!: Flashcard;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(FlashcardDetailComponent, {
      data: this.flashcard,
    });
  }
}

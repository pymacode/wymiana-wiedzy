import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard!: Flashcard;

  ngOnInit(): void {}
}

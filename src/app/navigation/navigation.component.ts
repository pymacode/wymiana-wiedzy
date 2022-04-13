import { Component, OnInit } from '@angular/core';
import { AddFlashcardService } from '../views/add-flashcard/add-flashcard.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private addFlashcardService: AddFlashcardService) {}

  ngOnInit(): void {}

  openModal() {
    this.addFlashcardService.openDialog();
  }
}

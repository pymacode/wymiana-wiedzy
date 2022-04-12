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
  @Input() private flashcard!: Flashcard;
  public title: string = this.flashcard.title;
  public tags: string[] = this.flashcard.tags;
  public description: string = this.flashcard.description;
  public url: string = this.flashcard.url;
  public previewUrl: string = this.generatePreviewUrl();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.dialog.open(FlashcardDetailComponent, {
      data: this.flashcard,
    });
  }

  private generatePreviewUrl(): string {
    return `https://i.ytimg.com/vi/${this.url.slice(
      this.url.lastIndexOf('=') + 1
    )}/maxresdefault.jpg`;
  }
}

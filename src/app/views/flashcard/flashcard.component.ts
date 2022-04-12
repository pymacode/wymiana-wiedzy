import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
  public title: string =
    'Introduction To Responsive Design With Angular Material';
  public tags: string[] = ['#tag', '#tag', '#tag'];
  public description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';
  public url: string = 'https://www.youtube.com/watch?v=_ZDYqYgM8SI';
  public previewUrl: string = this.generatePreviewUrl();

  constructor() {}

  ngOnInit(): void {}

  private generatePreviewUrl(): string {
    return `https://i.ytimg.com/vi/${this.url.slice(
      this.url.lastIndexOf('=') + 1
    )}/maxresdefault.jpg`;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Flashcard } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
  @Input() private flashcard!: Flashcard;
  public title: string = this.flashcard.title;
  public tags: string[] = this.flashcard.tags;
  // ['#tag', '#tag', '#tag'];
  public description: string = this.flashcard.description;
  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.';
  public url: string = this.flashcard.url;
  // 'https://www.youtube.com/watch?v=_ZDYqYgM8SI';
  public previewUrl: string = this.generatePreviewUrl();

  constructor() {}

  ngOnInit(): void {}

  private generatePreviewUrl(): string {
    return `https://i.ytimg.com/vi/${this.url.slice(
      this.url.lastIndexOf('=') + 1
    )}/maxresdefault.jpg`;
  }
}

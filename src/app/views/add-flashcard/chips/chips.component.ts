import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { ChipsService } from './chips.service';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
})
export class ChipsComponent {
  constructor(private chipsService: ChipsService) {}

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.chipsService.addTag(value);
      this.tags = this.chipsService.tagItems;
    }
    event.chipInput!.clear();
  }

  remove(tag: string): void {
    this.chipsService.removeTag(tag);
  }
}

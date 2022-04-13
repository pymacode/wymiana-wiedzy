import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChipsService {
  private tags: string[] = [];
  constructor() {}

  get tagItems() {
    return this.tags;
  }

  addTag(value: string) {
    this.tags.push(value);
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}

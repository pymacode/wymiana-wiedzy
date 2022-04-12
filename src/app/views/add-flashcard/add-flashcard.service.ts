import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddFlashcardService {
  constructor(private fb: FormBuilder) {}
  stanowisko: string[] = ['Frontend', 'Backend'];
  framework: string[] = ['Angular', 'Spring', 'React', 'Vue'];
  createForm() {
    const form = this.fb.group({});
  }
}

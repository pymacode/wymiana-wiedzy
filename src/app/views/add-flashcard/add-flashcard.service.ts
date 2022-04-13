import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ChipsService } from './chips/chips.service';
import { WorkspaceApiService } from '../../shared/services/workspace-api.service';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { Property, Flashcard, Workspace } from 'src/app/shared/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { AddFlashcardComponent } from './add-flashcard.component';
@Injectable({
  providedIn: 'root',
})
export class AddFlashcardService {
  private workspace!: Workspace;
  private backlinks: Flashcard[] = [];
  private properties: BehaviorSubject<Property[]> = new BehaviorSubject<
    Property[]
  >([]);
  private allFlashcards: BehaviorSubject<Flashcard[]> = new BehaviorSubject<
    Flashcard[]
  >([]);
  subs$!: Subscription;
  constructor(
    private fb: FormBuilder,
    private chipsService: ChipsService,
    private workspaceApi: WorkspaceApiService,
    private dialog: MatDialog
  ) {
    this.subs$ = this.workspaceApi.workspace$.subscribe((workspace) => {
      this.properties.next(workspace.template);
      this.allFlashcards.next(workspace.flashcards);
      this.workspace = workspace;
    });
  }

  get propertiesTemplate() {
    return this.properties.asObservable();
  }
  get flashcardsForWorkspace() {
    return this.allFlashcards.asObservable();
  }
  get backlinksArray() {
    return this.backlinks;
  }

  openDialog() {
    this.dialog.open(AddFlashcardComponent);
    console.log(uuidv4());
  }

  addBacklink(flashcard: Flashcard) {
    this.backlinks.push(flashcard);
  }
  removeBacklink(flashcard: Flashcard): void {
    const index = this.backlinks.indexOf(flashcard);

    if (index >= 0) {
      this.backlinks.splice(index, 1);
    }
  }

  createForm() {
    const regExp =
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    let propGroup: FormGroup = this.fb.group({});
    this.propertiesTemplate.subscribe((properties) => {
      properties.forEach((property) => {
        propGroup.addControl(
          property.name,
          new FormControl('', [Validators.required])
        );
      });
    });
    const form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      url: ['', [Validators.required, Validators.pattern(regExp)]],
      description: ['', [Validators.required, Validators.minLength(15)]],
      properties: propGroup,
      tags: [''],
      backlinks: [''],
    });
    return form;
  }

  groupFormDataTogether(formData: Flashcard) {
    const preparedData = formData;
    const preparedProperties: Property[] = [];
    for (const [key, value] of Object.entries(preparedData.properties)) {
      preparedProperties.push({
        name: key,
        value: [String(value)],
      });
    }
    preparedData.properties = preparedProperties;
    console.log(formData);
    preparedData['tags'] = this.chipsService.tagItems;
    preparedData['backlinks'] = this.backlinksArray;
    preparedData['id'] = uuidv4();

    this.workspace.flashcards.push(preparedData);

    this.workspaceApi.addFlashcardToWorkspace(this.workspace);
  }
}

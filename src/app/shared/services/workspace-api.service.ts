import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, find, first, map, pluck, ReplaySubject, tap } from 'rxjs';
import { Flashcard, Property, Workspace } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  private workspace: ReplaySubject<Workspace> = new ReplaySubject<Workspace>(1);
  private wholeWorkspace!: Workspace;
  constructor(private http: HttpClient, private router: Router) {
    this.workspace$.subscribe((workspace) => (this.wholeWorkspace = workspace));
  }

  public get workspace$() {
    return this.workspace.asObservable();
  }

  public getWorkspace(id: string) {
    console.log('get works');
    this.http
      .get<Workspace>(`http://localhost:3000/workspaces/${id}`)
      .subscribe({
        next: (workspace) => {
          workspace.flashcards.forEach(
            (item) => (item.previewUrl = this.generatePreviewUrl(item.url))
          );
          this.workspace.next(workspace);
          localStorage.setItem('currentFlashcards', JSON.stringify(workspace));
        },
        error: () => this.router.navigate(['/app']),
      });
  }

  public addFlashcardToWorkspace(workspace: Workspace) {
    this.http
      .put(`http://localhost:3000/workspaces/${workspace.id}`, workspace)
      .subscribe({
        next: () => {
          console.log('Success');
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  public refreshAllFlashcards() {}

  public searchByName(text: string) {
    const currentWorkspace: Workspace = JSON.parse(
      String(localStorage.getItem('currentFlashcards'))
    );
    let filtered: Flashcard[];
    filtered = currentWorkspace.flashcards.filter((flashcard) =>
      flashcard.title.toLowerCase().includes(text.toLowerCase())
    );

    this.wholeWorkspace.flashcards = filtered;
    this.workspace.next(this.wholeWorkspace);
  }

  private generatePreviewUrl(url: string): string {
    return `https://i.ytimg.com/vi/${url.slice(
      url.lastIndexOf('=') + 1
    )}/maxresdefault.jpg`;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { first, ReplaySubject } from 'rxjs';
import { Flashcard, Workspace } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  private workspace: ReplaySubject<Workspace> = new ReplaySubject<Workspace>(1);
  private wholeWorkspace!: Workspace;
  constructor(private http: HttpClient, private router: Router) {
    this.workspace$
      .pipe(first())
      .subscribe((value) => (this.wholeWorkspace = value));
  }

  public get workspace$() {
    return this.workspace.asObservable();
  }

  public getWorkspace(id: string) {
    this.http
      .get<Workspace>(`http://localhost:3000/workspaces/${id}`)
      .subscribe({
        next: (workspace) => {
          workspace.flashcards.forEach(
            (item) => (item.previewUrl = this.generatePreviewUrl(item.url))
          );
          this.workspace.next(workspace);
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
    let currentWorkspace: Workspace;
    currentWorkspace = this.wholeWorkspace;
    this.workspace.next(currentWorkspace!);
  }

  private generatePreviewUrl(url: string): string {
    return `https://i.ytimg.com/vi/${url.slice(
      url.lastIndexOf('=') + 1
    )}/maxresdefault.jpg`;
  }
}

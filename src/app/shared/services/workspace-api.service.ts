import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { Workspace } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  private workspace: ReplaySubject<Workspace> = new ReplaySubject<Workspace>(1);
  constructor(private http: HttpClient, private router: Router) {}

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

  private generatePreviewUrl(url: string): string {
    return `https://i.ytimg.com/vi/${url.slice(
      url.lastIndexOf('=') + 1
    )}/maxresdefault.jpg`;
  }
}

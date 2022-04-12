import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Workspace } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {
  workspace: ReplaySubject<Workspace> = new ReplaySubject<Workspace>(1);
  constructor(private http: HttpClient) {
    this.getWorkspace('1');
  }

  public get workspace$() {
    return this.workspace.asObservable();
  }

  public getWorkspace(id: string) {
    this.http
      .get<Workspace>(`http://localhost:3000/workspaces?id=${id}`)
      .subscribe((workspace) => {
        this.workspace.next(workspace);
      });
  }
}

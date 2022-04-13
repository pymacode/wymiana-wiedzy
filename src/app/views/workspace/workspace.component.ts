import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { WorkspaceApiService } from 'src/app/shared/services/workspace-api.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  public flashcards$ = this.workspaceService.workspace$.pipe(
    tap((workspace) => workspace)
  );

  constructor(
    private workspaceService: WorkspaceApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.workspaceService.getWorkspace(this.route.snapshot.params['id']);
  }
}

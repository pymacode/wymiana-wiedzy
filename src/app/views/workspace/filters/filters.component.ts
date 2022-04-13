import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, filter, tap } from 'rxjs';
import { WorkspaceApiService } from 'src/app/shared/services/workspace-api.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  inputSearch = new FormControl('');
  constructor(
    private workspaceApi: WorkspaceApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inputSearch.valueChanges
      .pipe(
        debounceTime(500),
        filter((value) => value.length >= 3)
      )
      .subscribe((searchText) => {
        this.workspaceApi.searchByName(searchText);
      });
  }
}

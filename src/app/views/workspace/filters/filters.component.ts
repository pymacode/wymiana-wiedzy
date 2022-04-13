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
  selectFilter = new FormControl('');
  tags = ['rxjs', 'angular', 'databases', 'react', 'java', 'spring'];
  activeTags: string[] = [];
  constructor(
    private workspaceApi: WorkspaceApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inputSearch.valueChanges
      .pipe(debounceTime(500))
      .subscribe((searchText) => {
        this.workspaceApi.searchByName(searchText);
      });
  }

  activateTag(tag: string) {
    this.activeTags.push(tag);
    this.tags.splice(this.findIndex(this.tags, tag), 1);
  }

  removeTag(tag: string) {
    this.tags.push(tag);
    this.activeTags.splice(this.findIndex(this.activeTags, tag), 1);
  }

  findIndex(arr: string[], element: string) {
    return arr.findIndex((item) => item === element);
  }
}

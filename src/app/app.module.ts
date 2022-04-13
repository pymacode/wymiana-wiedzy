import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BlankComponent } from './views/blank/blank.component';
import { HeaderComponent } from './shell/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashcardComponent } from './views/flashcard/flashcard.component';
import { MatCardModule } from '@angular/material/card';
import { FlashcardDetailComponent } from './views/flashcard-detail/flashcard-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { WorkspaceComponent } from './views/workspace/workspace.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFlashcardComponent } from './views/add-flashcard/add-flashcard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsComponent } from './views/add-flashcard/chips/chips.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { IconPenComponent } from './shared/icons/icon-pen/icon-pen.component';
import { FiltersComponent } from './views/workspace/filters/filters.component';
import { NetworkGraphComponent } from './views/network-graph/network-graph.component';
import { IconGraphComponent } from './shared/icons/icon-graph/icon-graph.component';

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      { path: 'add-workspace', component: BlankComponent },
      {
        path: 'workspace/:id',
        component: WorkspaceComponent,
      },
    ],
  },
  { path: '**', redirectTo: '/app' },
  { path: '', pathMatch: 'full', redirectTo: 'app' },
];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    BlankComponent,
    HeaderComponent,
    NavigationComponent,
    FlashcardComponent,
    FlashcardDetailComponent,
    WorkspaceComponent,
    AddFlashcardComponent,
    ChipsComponent,
    IconPenComponent,
    FiltersComponent,
    NetworkGraphComponent,
    IconGraphComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { IconPenComponent } from './shared/icons/icon-pen/icon-pen.component';
import { NetworkGraphComponent } from './views/network-graph/network-graph.component';

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      { path: 'add-workspace', component: BlankComponent },
      {
        path: 'workspace/:id',
        component: WorkspaceComponent,
        children: [
          { path: 'add-flashcard', component: BlankComponent },
          { path: 'flashcard/:id', component: BlankComponent },
        ],
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
    IconPenComponent,
    NetworkGraphComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

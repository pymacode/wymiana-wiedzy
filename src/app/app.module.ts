import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BlankComponent } from './views/blank/blank.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashcardComponent } from './views/flashcard/flashcard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: 'app',
    component: ShellComponent,
    children: [
      { path: 'add-workspace', component: BlankComponent },
      {
        path: 'workspace/:id',
        component: BlankComponent,
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
    FlashcardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

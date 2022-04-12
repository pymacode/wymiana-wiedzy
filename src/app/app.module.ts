import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { BlankComponent } from './views/blank/blank.component';
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
  declarations: [AppComponent, ShellComponent, BlankComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

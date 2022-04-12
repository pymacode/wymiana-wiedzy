import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      //Tutaj routing podrzędny
    ],
  },
];

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CharacterFullDescriptionComponent } from './character-full-description/character-full-description.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'characters/:id', component: CharacterFullDescriptionComponent },
  { path: 'home', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

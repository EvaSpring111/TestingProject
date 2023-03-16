import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import  {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { GetCharactersService } from 'src/app/services/get-characters.service';
import { CharacterFullDescriptionComponent } from './character-full-description/character-full-description.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CharacterFullDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ GetCharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ListOfCharacters } from './interface/list-of-characters.model';
import { GetCharactersService } from './services/get-characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'TestingProject';
  page: string = '8';

  characters: any;

  constructor(private servieCharactersList: GetCharactersService){}

  ngOnInit(){
    this.servieCharactersList
      .getCharactersList()
        .subscribe((data: any) => {
          console.log(data)
          return this.characters = data[0].results;
          // console.log(this.characters)
        });

  }

  choosePage(){
    this.servieCharactersList.getCharactersList().subscribe((data: any) => {
      this.characters = data[this.page].results;
    });
  }

  sortCharactersByName(characters: any[]): any[] {
    return characters.sort((a, b) => a.name.localeCompare(b.name));
  }
}
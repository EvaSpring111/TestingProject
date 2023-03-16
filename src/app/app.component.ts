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

  characters: any;

  constructor(private servieCharactersList: GetCharactersService){}

  ngOnInit()  {
    this.servieCharactersList
      .getCharactersList()
        .subscribe((data: any) => {
          console.log(data)
          return this.characters = data.results;
          // console.log(this.characters)
        });

  }
}
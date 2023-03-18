import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


import { ListOfCharacters } from './interface/list-of-characters.model';
import { GetCharactersService } from './services/get-characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TestingProject';
  page: string = '8';

  characters: any;
  character: any;

  constructor(private servieCharactersList: GetCharactersService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.servieCharactersList
      .getCharactersList()
      .subscribe((data: any) => {
        console.log(data)
        return this.characters = data[0].results;
      });

  }

  getCharacter(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.servieCharactersList.getCharacter(id)
      .subscribe((data: any) => {
        this.character = data;
        console.log(this.character)

      })
  }

  choosePage() {
    this.servieCharactersList.getCharactersList().subscribe((data: any) => {
      this.characters = data[this.page].results;
    });
  }

  sortCharactersByName(characters: any[]): any[] {
    return characters.sort((a, b) => a.name.localeCompare(b.name));
  }
}
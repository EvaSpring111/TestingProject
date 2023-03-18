import { Component, OnInit } from '@angular/core';
import { CharacterFullDescription } from '../interface/character-full-description.model';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { GetCharactersService } from '../services/get-characters.service';

@Component({
  selector: 'app-character-full-description',
  templateUrl: './character-full-description.component.html',
  styleUrls: ['./character-full-description.component.css']
})
export class CharacterFullDescriptionComponent implements  OnInit{

  characters: any = [];
  images: string[] = [];
  character: any;
  

  constructor(
    private ccService: GetCharactersService,
    private route: ActivatedRoute,
    private location: Location,
  ){}

  ngOnInit(){
    this.ccService
      .getCharactersList()
        .subscribe((data: any) => {
          console.log(data)
          this.characters = data.results;
          console.log(this.characters)
        });
        console.log(this.character)
       return this.getCharacter();
  }

  goBack(): void {
    this.location.back();
  }

  getCharacter(): void {
    let id = Number(this.route.snapshot.paramMap.get("id"));
    this.ccService.getCharacter(id)
    .subscribe((data: any) => {
      this.character = data;
      this.images = this.character.images;
      
  })
}
}

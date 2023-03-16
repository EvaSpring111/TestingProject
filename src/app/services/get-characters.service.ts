import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
// ss
import { ListOfCharacters } from '../interface/list-of-characters.model';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersService {
  apiUrl: string = 'https://rickandmortyapi.com/api/character?pages';

  constructor(private http: HttpClient) { 
  }

  getCharactersList(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  
  }
}

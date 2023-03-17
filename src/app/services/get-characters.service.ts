import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import { forkJoin } from 'rxjs';

import { ListOfCharacters } from '../interface/list-of-characters.model';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersService {
  apiUrl: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { 
  }

  getCharactersList(): Observable<ListOfCharacters[]>{
    return this.http.get<ListOfCharacters[]>(this.apiUrl)
  }
}


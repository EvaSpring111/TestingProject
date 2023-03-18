import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';
import { HttpClient } from '@angular/common/http';
import {  Observable  } from 'rxjs';
import { forkJoin } from 'rxjs';
import * as rxjs from 'rxjs';


import { ListOfCharacters } from '../interface/list-of-characters.model';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersService {
  apiUrl: string = `${environment.apiUrl}`;
  apiUrlForOne: string = `https://rickandmortyapi.com/api/character`;

  constructor(private http: HttpClient) { 
  }

  getCharactersList(): Observable<any[]>{
    let result: any[] = [];
    for(let i = 1; i <= 42; i++){
       result.push(this.http.get<any[]>(`${this.apiUrl}${i}`))
    }
    console.log('Hello');
    return forkJoin(result);
    
  }

  
  getCharacter(id: number): Observable<any> {
    const url1 = `${this.apiUrlForOne}${id}.json`;
    console.log('Hello11');
    return this.http.get<any>(url1);
  }
}

// let result = [];
// for(let i = 1; i <= 42; i++){
//   result.push(this.http.get<ListOfCharacters[]>(`${this.apiUrl}/character?page=${i}`));
// }
// return forkJoin(result);
// }


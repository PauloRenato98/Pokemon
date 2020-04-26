import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PesquisarapiService {

  APIPOKEMON = 'https://pokeapi.co/api/v2/pokemon/ditto/'



  constructor(private http: HttpClient) { }


  reqapi(){
  return this.http.get(this.APIPOKEMON);
}










}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    return this.http.get<T>(query, { headers });
  }


  getTopHeadLines(){
    return this.ejecutarQuery<RespuestaTopHeadLines>(`top-headlines?country=us`);
  }

  getTopHeadLinesCategorias(categoria: string){
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=de&category=${categoria}`);
  }
}

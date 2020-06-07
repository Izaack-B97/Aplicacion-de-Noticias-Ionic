import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines(){
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=8c8aceec7cf54a7dbb424dbfda9c34c8`);
  }
}

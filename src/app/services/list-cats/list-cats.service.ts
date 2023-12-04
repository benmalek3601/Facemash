import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCatsService {

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get<any>('https://latelier.co/data/cats.json');
  }
}

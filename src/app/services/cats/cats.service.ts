import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cat } from '../../models/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get<any>('https://facemash-api.onrender.com/cats');
  }

  putCat(data: Cat, id: string) {
    return this.http.put<any>("https://facemash-api.onrender.com/cats/" +  id, data);
  }

}

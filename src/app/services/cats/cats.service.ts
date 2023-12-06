import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cat } from '../../models/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get<any>('http://localhost:3000/cats');
  }

  putCat(data: Cat, id: string) {
    return this.http.put<any>("http://localhost:3000/cats/" +  id, data);
  }

}

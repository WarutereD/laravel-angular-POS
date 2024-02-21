import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private httpClient: HttpClient ) { }

  getCategories() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
    });

    return this.httpClient.get('http://localhost:8000/api/categories', { headers });
  }
}

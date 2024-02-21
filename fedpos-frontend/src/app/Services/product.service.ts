import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient: HttpClient ) {}

  saveData(inputData: Object) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
      
    });

    return this.httpClient.post('http://localhost:8000/api/products/add', inputData, { headers });
    
  }

  getProducts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
    });

    return this.httpClient.get('http://localhost:8000/api/products', { headers });
  }
}

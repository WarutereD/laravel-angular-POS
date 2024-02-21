import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor( 
    private httpClient: HttpClient,
    ) { }

  

  saveData(inputData: Object) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'accept': '*/*',
    });

    return this.httpClient.post('http://localhost:8000/api/sales', inputData, { headers });
  }
}

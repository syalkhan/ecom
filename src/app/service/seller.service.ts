import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  seller(data: object){

    return this.http.post('http://localhost:3000/seller', data);

    
  }
}

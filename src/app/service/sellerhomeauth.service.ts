import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerhomeauthService {

  constructor() { }

  isAuthenticated: boolean = false;
  checkAuthentication(): boolean{
    return this.isAuthenticated;
  }
}

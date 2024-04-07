import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
    console.log('LoginService created.. ');
  }

  isAdmin():boolean{
    console.log(' Going for isAdmin...');
    return false;
  }

  isLoggedIn():boolean{
    console.log(' Going for isLoggedIn...');
    return true;
  }
}

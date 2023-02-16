import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private ruoter: Router) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (
      userInfo.email == 'elis1386@gmail.com' &&
      userInfo.password == 'elis1234'
    ) {
      this.setToken('DRFVh35jrewfjsidg7w4ui');
      return of(true);
    }
    return throwError(() => new Error('Faild login'));
  }
}

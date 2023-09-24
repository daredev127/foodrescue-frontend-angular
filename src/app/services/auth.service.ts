import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOOD_RESCUE_BACKEND,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    const body = JSON.stringify(credentials);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(FOOD_RESCUE_BACKEND + '/login', body, {
      headers: headers,
    });
  }
}

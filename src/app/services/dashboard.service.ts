import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOOD_RESCUE_BACKEND,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<any> {
    return this.http.get(FOOD_RESCUE_BACKEND + '/donation/summary?organizationId=237A6740-8F8F-4602-A4E6-B00D584F7885');
  }
}

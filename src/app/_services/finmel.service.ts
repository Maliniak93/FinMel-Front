import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainDashboard } from '../_models/mainDashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinmelService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getGttpOptions() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + user.token,
      }),
    };
  }

  getMainDashboard(): Observable<MainDashboard> {
    return this.http.get<MainDashboard>(
      this.apiUrl + '/dashboard',
      this.getGttpOptions()
    );
  }
}

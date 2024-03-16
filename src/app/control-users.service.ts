import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ControlUsersService {

  constructor(private http: HttpClient) { }

  readonly URL = 'http://127.0.0.1:8000/api';

  login(data: any) {
    return this.http.post(`${this.URL}/iniciarSesion`, data);
  }

  register(data: any) {
    return this.http.post(`${this.URL}/crear-usuario`, data);
  }

  clubesUsuario(data: any): Observable<any[]> {
    return this.http.post<any[]>(`${this.URL}/clubesUsuario`, data);
  }

}

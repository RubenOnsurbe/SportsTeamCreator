import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataClubService {

  constructor(private global:GlobalService, private http: HttpClient) { }


  obtenerTodos(pagina?:number){


    const data = {"page":pagina}
      return this.http.post(`${this.global.URL}/obtenerClubes`,data);
    
  }

  buscarClub(nombreClub:string,pagina?:number){

    const data = { "nombre": nombreClub,"page":pagina};
    return this.http.post(`${this.global.URL}/buscarClub`,data);
  }

}

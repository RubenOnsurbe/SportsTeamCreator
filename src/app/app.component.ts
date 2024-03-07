import { Component } from '@angular/core';
import { PruebaService } from './prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private servicio_prueba:PruebaService ){}

  title = 'SportsTeamCreator';
  paco = 'pepe';


  verUrl(){
    this.servicio_prueba.holaMundo().subscribe(
      (respuesta) => {
      alert(respuesta);
      },
      (error) => {
        // Manejar el error aquí
        console.error(error);
      }
    );
  }



}

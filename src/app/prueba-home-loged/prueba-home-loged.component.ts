import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba-home-loged',
  templateUrl: './prueba-home-loged.component.html',
  styleUrl: './prueba-home-loged.component.css'
})
export class PruebaHomeLogedComponent {




  desplegarMenuOpciones(): void {
    const opcionesIzquierda = document.getElementById("opcionesIzquierda");
    if (opcionesIzquierda) {
        if (opcionesIzquierda.classList.contains('d-none')) {
            opcionesIzquierda.classList.remove('d-none');
        } else {
            opcionesIzquierda.classList.add('d-none');
        }
    }
}







}

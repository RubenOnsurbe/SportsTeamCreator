import { Component } from '@angular/core';
import { ControlUsersService } from '../control-users.service';


@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrl: './home-loged.component.css'
})
export class HomeLogedComponent {
  clubes: any[] = [];
  noTieneClubes: boolean = false;

  constructor(private ControlUser: ControlUsersService) { }

  cerrarSesion() {
    sessionStorage.removeItem('DNI');
  }

  ngOnInit(): void {
    const dni = sessionStorage.getItem('DNI');
    if (dni) {
      const requestData = { DNI: dni };
      this.ControlUser.clubesUsuario(requestData).subscribe(
        response => { // Esperamos un array de clubes
          console.log('Respuesta de la solicitud:', response);
          this.clubes = response; // Asignar los clubes recibidos
          this.noTieneClubes = this.clubes.length === 0; // Verificar si el usuario no tiene clubes
        },
        error => {
          console.error('Error en la solicitud:', error);
          alert('Error en la solicitud. Consulta la consola para más detalles.');
          console.error('Detalles del error:', error instanceof ErrorEvent ? error.error : error);
        }
      );
    } else {
      console.error('No se encontró el DNI en el sessionStorage.');
    }
  }




}

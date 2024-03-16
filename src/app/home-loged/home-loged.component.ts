import { Component } from '@angular/core';
import { ControlUsersService } from '../control-users.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-home-loged',
  templateUrl: './home-loged.component.html',
  styleUrl: './home-loged.component.css'
})
export class HomeLogedComponent {
  clubes: any[] = [];
  noTieneClubes: boolean = false;
  codigoAcceso: string = '';
  nombreClub: string = '';
  usuarioClub: string = '';
  usuarioClub2: string = '';
  mostrarFormulario: boolean = false;

  constructor(private ControlUser: ControlUsersService, private toastr: ToastrService) { }

  cerrarSesion() {
    sessionStorage.removeItem('DNI');
  }

  ngOnInit(): void {
    if (!this.mostrarFormulario) {
      const dni = sessionStorage.getItem('DNI');
      if (dni) {
        const requestData = { DNI: dni };
        this.ControlUser.clubesUsuario(requestData).subscribe(
          response => {
            console.log('Respuesta de la solicitud:', response);
            this.clubes = response;
            this.noTieneClubes = this.clubes.length === 0;
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


  unirseAClub() {
    const dni = sessionStorage.getItem('DNI');
    if (dni) {
      console.log('DNI:', dni, 'UsuarioClub:', this.usuarioClub, 'CodigoAcceso:', this.codigoAcceso);
      this.ControlUser.unirseAClub({ DNI: dni, usuarioClub: this.usuarioClub, codigoAcceso: this.codigoAcceso }).subscribe(
        response => {
          const respuesta = response.toString();
          if (respuesta.includes("club")) {
            this.toastr.error('El usuario del club no existe');
          } else if (respuesta.includes("club2")) {
            this.toastr.error('Ya estas en ese club');
          } else if (respuesta.includes("codigoAcceso")) {
            this.toastr.error('El codigo de acceso es incorrecto');
          } else {
            this.toastr.success('Equipo añadido correctamente');
            this.ngOnInit();
          }
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

  crearClub() {
    const dni = sessionStorage.getItem('DNI');
    if (dni && this.nombreClub && this.usuarioClub && this.codigoAcceso) {
      this.ControlUser.crearClub({ DNI: dni, nombre: this.nombreClub, usuarioClub: this.usuarioClub2, codigoAcceso: this.codigoAcceso }).subscribe(
        response => {
          console.log('Respuesta de la solicitud:', response);
          this.mostrarFormulario = false;
          this.ngOnInit();
        },
        error => {
          console.error('Error en la solicitud:', error);
          alert('Error en la solicitud. Consulta la consola para más detalles.');
          console.error('Detalles del error:', error instanceof ErrorEvent ? error.error : error);
        }
      );
    } else {
      console.error('Por favor, completa todos los campos.');
      alert('Por favor, completa todos los campos.');
    }
  }

}

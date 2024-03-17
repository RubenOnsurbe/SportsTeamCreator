import { Component } from '@angular/core';
import { ControlUsersService } from '../control-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  contadorClubes: any;
  contadorUsuarios: any;
  contadorVisitas: any;
  constructor(private ControlUser: ControlUsersService) { }
  ngOnInit() {
    this.ControlUser.cuantosClubes().subscribe((data: any) => {
      this.contadorClubes = data;
    });
    this.ControlUser.cuantosUsuarios().subscribe((data: any) => {
      this.contadorUsuarios = data;
    });
    this.ControlUser.nuevaVisita().subscribe((data: any) => {
      console.log(data);
    });
    this.ControlUser.cuantasVisitas().subscribe((data: any) => {
      this.contadorVisitas = data;
    });
  }
}

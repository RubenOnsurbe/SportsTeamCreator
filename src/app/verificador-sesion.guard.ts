import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VerificadorSesionGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const dni = sessionStorage.getItem('DNI');

    if (dni) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}


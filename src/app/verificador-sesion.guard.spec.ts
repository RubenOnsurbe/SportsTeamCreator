import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { VerificadorSesionGuard } from './verificador-sesion.guard';

describe('VerificadorSesionGuard', () => {
  let guard: VerificadorSesionGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [VerificadorSesionGuard]
    });
    guard = TestBed.inject(VerificadorSesionGuard);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation when no DNI in sessionStorage', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue(null);
    expect(guard.canActivate()).toBe(true);
  });

  it('should navigate to "/" when DNI in sessionStorage', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('12345678A'); 
    spyOn(router, 'navigate');
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});

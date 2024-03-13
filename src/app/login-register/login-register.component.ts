import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import $ from 'jquery';
import { ControlUsersService } from '../control-users.service';
import { Usuario } from '../shared/usuario.interface';


const dateValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  if (control && control.value) {
    const fechaInput = new Date(control.value);
    const fechaActual = new Date();

    if (isNaN(fechaInput.getTime()) || fechaInput >= fechaActual) {
      return { 'invalidDate': true };
    }
  }

  return null;
};
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  mostrarIniciarSesion: boolean = true;
  mostrarRegistrarse: boolean = false;
  mostrarrecuperar_contrasena: boolean = false;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  resetPassForm!: FormGroup;
  usuario: Usuario = {
    dni: '',
    nombre: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    fechanacimiento: ''
  };

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private ControlUser: ControlUsersService) { }

  ngOnInit(): void {
    this.initializeLoginForm();
    this.initializeRegisterForm();
    this.initializeResetPassForm();

    $(document).ready(() => {
      $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e: Event) {
        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.addClass("active highlight");
          }
        } else if (e.type === "blur") {
          if ($this.val() === "") {
            label.removeClass("active highlight");
          } else {
            label.removeClass("highlight");
          }
        } else if (e.type === "focus") {
          if ($this.val() === "") {
            label.removeClass("highlight");
          } else if ($this.val() !== "") {
            label.addClass("highlight");
          }
        }
      });

      $(".tab a").on("click", function (e: Event) {
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        let target = $(this).attr("href") as string;
        if (target) {
          $(".contenido-tab > div").not(target).hide();
          $(target).fadeIn(600);
        }
      });
    });
  }


  initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    if (this.mostrarIniciarSesion) {

    }
  }

  initializeRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      dni: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.pattern(/^\d{4}\/\d{2}\/\d{2}$/), dateValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: [this.passwordMatchValidator]
    });
  }


  initializeResetPassForm(): void {
    this.resetPassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  passwordMatchValidator = (formGroup: FormGroup) => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      this.toastr.warning('Las contraseñas no coinciden');
    } else {
      confirmPassword?.setErrors(null);
    }
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      this.toastr.success('Formulario válido');
    } else {
      this.toastr.error('Formulario inválido');
    }
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      this.toastr.success('Formulario válido');
      console.log(this.usuario);
    } else {
      this.toastr.error('Formulario inválido');
    }
  }
  onSubmitResetPass() {
    if (this.resetPassForm.valid) {
      this.toastr.success('Formulario válido');
    } else {
      this.toastr.error('Formulario inválido');
    }
  }

  toggleFormulario(formulario: string): void {
    if (formulario === 'iniciar-sesion') {
      this.mostrarIniciarSesion = true;
      this.mostrarRegistrarse = false;
      this.mostrarrecuperar_contrasena = false;
      this.initializeLoginForm();
    } else if (formulario === 'registrarse') {
      this.mostrarIniciarSesion = false;
      this.mostrarRegistrarse = true;
      this.mostrarrecuperar_contrasena = false;
      this.initializeRegisterForm();
    } else if (formulario === 'recuperar-contrasena') {
      this.mostrarIniciarSesion = false;
      this.mostrarRegistrarse = false;
      this.mostrarrecuperar_contrasena = true;
    }
  }

}



import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HomeLogedComponent } from './home-loged/home-loged.component';
import { VerificadorSesionGuard } from './verificador-sesion.guard';
import { PruebaHomeLogedComponent } from './prueba-home-loged/prueba-home-loged.component';
import { ListadoClubesComponent } from './listado-clubes/listado-clubes.component';



const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'loged', component: HomeLogedComponent, canActivate: [VerificadorSesionGuard] },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'pruebaLoged', component: PruebaHomeLogedComponent }


];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginRegisterComponent,
    CalendarioComponent,
    HomeLogedComponent,
    PruebaHomeLogedComponent,
    ListadoClubesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }),
    FullCalendarModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

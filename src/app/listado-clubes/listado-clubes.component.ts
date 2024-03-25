import { Component } from '@angular/core';
import { DataClubService } from '../data-club.service';
import { Club } from '../shared/club.interface';
import { Router, RouterLink } from '@angular/router';
interface ClubesPaginados {
  current_page: number;
  data: Club[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: { url: string | null; label: string; active: boolean }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

@Component({
  selector: 'app-listado-clubes',
  templateUrl: './listado-clubes.component.html',
  styleUrl: './listado-clubes.component.css'
})
export class ListadoClubesComponent {

mostrarClubes:boolean=false;
listaClubes:Club[]=[];
clubABuscar:string="";
mensajeCeroRegistros:string="";
clubesPaginados: ClubesPaginados  | null = null;
ngOnInit(){


}
constructor(private servicioClubes:DataClubService, private router: Router){}

  buscarClub(clubABuscar:string){

    

    this.mostrarClubes = true;
    this.clubABuscar=clubABuscar;

    if(clubABuscar==""){
      
      this.obtenerClubes();
    
    }else {
    
    this.servicioClubes.buscarClub(clubABuscar,this.clubesPaginados?.current_page).subscribe(
      (response: any) => {
        
       this.clubesPaginados=response;
        
      

      },
      (error) => {
        console.error('Error', error);
        // Aquí puedes manejar cualquier error que ocurra durante la solicitud HTTP
      }
    );

    }
  }



  obtenerClubes(){

    
    this.servicioClubes.obtenerTodos(this.clubesPaginados?.current_page).subscribe(
      (response: any) => {
       this.clubesPaginados=response;
        
      

      },
      (error) => {
        console.error('Error', error);
        // Aquí puedes manejar cualquier error que ocurra durante la solicitud HTTP
      }
    );
  }

  


  cargarPagina(numeroPagina: number) {
    this.clubesPaginados!.current_page=numeroPagina;
    if(this.clubABuscar==""){
     
      this.obtenerClubes();
    }else{
      this.buscarClub(this.clubABuscar);
    }
    
  }
    
  guardarNombreClub(nombreClub:string){
    this.router.navigate(['/infoClub'], { queryParams: { nombreClub: nombreClub } });
  }
    
  


}

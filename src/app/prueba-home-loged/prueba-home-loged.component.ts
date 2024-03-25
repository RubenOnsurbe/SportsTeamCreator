import { Component, HostListener, ViewChild } from '@angular/core';
import { ListadoClubesComponent } from '../listado-clubes/listado-clubes.component';

@Component({
  selector: 'app-prueba-home-loged',
  templateUrl: './prueba-home-loged.component.html',
  styleUrl: './prueba-home-loged.component.css'
})
export class PruebaHomeLogedComponent {

//Resize es una funcion para ajustar el ancho del contenedor de la lista de partidos al buscador

  ngOnInit(){
    this.onResize();
  }

  clubABuscar:string="";

  @ViewChild(ListadoClubesComponent) listadoClubesComponent!: ListadoClubesComponent;

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

mostrarClubes:boolean=false;

llamarHijoBuscar(){
  document.getElementById("listadoClubesWrapper")!.style.backgroundColor="white"
  this.listadoClubesComponent.buscarClub(this.clubABuscar);
}

llamarHijoMostrarClubes(){
  document.getElementById("listadoClubesWrapper")!.style.backgroundColor="white"
  this.listadoClubesComponent.buscarClub(this.clubABuscar);
}

llamarHijoOcultarClubes(){
  document.getElementById("listadoClubesWrapper")!.style.backgroundColor="initial";
  this.listadoClubesComponent.mostrarClubes=false;
}


/* FUnciones para que se oculte cuando se clicka fuera el input o de la lista de clubes */
@HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // Aquí verificarás si el clic ocurrió fuera de los elementos deseados
    const clickedElement = event.target as HTMLElement;

    // Verifica si el clic ocurrió fuera de los elementos deseados
    if (!this.isClickedInsideElement(clickedElement, 'inputBox_container') &&
        !this.isClickedInsideElement(clickedElement, 'listadoClubesWrapper')) {
      // El clic ocurrió fuera de los elementos deseados, realiza la acción deseada aquí
      this.llamarHijoOcultarClubes();
    }
  }

  private isClickedInsideElement(clickedElement: HTMLElement, id: string): boolean {
    return clickedElement.closest(`#${id}`) !== null;
  }





@HostListener('window:resize', ['$event'])
  onResize() {
    // Agregar un pequeño retraso antes de llamar a tu función
    
      let buscador = document.getElementById("inputBox_container");
     
  
      if(buscador){
        let estiloCalculado = window.getComputedStyle(buscador);
        let ancho = estiloCalculado.getPropertyValue('width');
        
        let listadoClubes = document.getElementById("listadoClubesWrapper");

        
        let anchoNumerico = parseFloat(ancho.replace('px', ''));
        // Restar 50px al ancho
        let nuevoAncho = anchoNumerico - 50;

        listadoClubes!.style.width=nuevoAncho+'px';
        
       
      }
  
      
  
  }

  

}

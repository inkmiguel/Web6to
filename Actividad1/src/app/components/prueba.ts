import { Component } from '@angular/core';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.html',
  styleUrls: ['./prueba.css']
})
export class PruebaComponent {
  texto: string = 'Hola mundo';
  arreglo: string[] = new Array();

  constructor(){
    this.texto = 'Hola mundo desde Angular';
    this.arreglo.push("Nose");
    this.arreglo.push("Puedeser");
    this.arreglo.push("Talvez");
  }
  botonFuncion(){
    this.texto = 'Boton presionado';
    this.arreglo.push("Ultimo elemento")
  }
}

import { Component } from '@angular/core';
import { images } from 'src/imgs/images';


@Component({
  selector: 'prueba',
  templateUrl: './prueba.html',
  styleUrls: ['./prueba.css']
})
export class PruebaComponent {
  texto: string = 'Hola mundo';
  arreglo: string[] = new Array();
  cheves: boolean = true;
  status: string = 'fase1';
  images = images.ganador;

  constructor(){
    this.texto = 'Hola mundo desde Angular';
    this.arreglo.push("Nose");
    this.arreglo.push("Puedeser");
    this.arreglo.push("Talvez");
  }
  botonFuncion(){
    this.texto = 'Boton presionado';
    // this.arreglo.push("Ultimo elemento")
    // this.cheves = !this.cheves;
    
    if (this.status === 'fase2') {
      this.status = 'fase3';
    }
    if (this.status === 'fase1') {
      this.status = 'fase2';
    }
  }
}
import { Component } from "@angular/core";
import { pelicula } from "src/app/estructuras/general";

@Component({
    selector: 'ej-dos',
    templateUrl: './ej.dos.html',
    styleUrls: ['./ej.dos.css']
})
export class EjDosComponent {

    peliculaModal:pelicula = new pelicula();

    constructor(){}

    registrarPelicula(){
        console.log(this.peliculaModal);
        document.getElementById("cerrarModal")?.click();
    }
}
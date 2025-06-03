import { Component } from "@angular/core";
import { pelicula } from "src/app/estructuras/general";

@Component({
    selector: 'ej-dos',
    templateUrl: './ej.dos.html',
    styleUrls: ['./ej.dos.css']
})
export class EjDosComponent {

    peliculaModal:pelicula = new pelicula();
    lsitaPeliculas:pelicula[] = [];

    constructor(){}

    registrarPelicula(){
        this.lsitaPeliculas.push(this.peliculaModal);
        this.peliculaModal = new pelicula();
        document.getElementById("cerrarModal")?.click();
        console.log(this.lsitaPeliculas);
    }
    edicionPelicula(getPelicula:pelicula){
        this.peliculaModal = getPelicula;
        this.peliculaModal.edicion = true;
    }
}
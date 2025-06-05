import { Component } from "@angular/core";
import { pelicula } from "src/app/estructuras/general";

@Component({
    selector: 'ej-dos',
    templateUrl: './ej.dos.html',
    styleUrls: ['./ej.dos.css']
})
export class EjDosComponent {

    peliculaModal:pelicula = new pelicula();
    listaPeliculas:pelicula[] = [];

    constructor(){}

    registrarPelicula(){
        if(!this.validHorario()){
            alert("Horario no válido, debe estar entre 0 y 24");
            return;
        }
        
        if(!this.validarDuracion()){
            alert("Duración no válida, debe ser mayor a 0");
            return;
        }
        this.listaPeliculas.push(this.peliculaModal);
        this.peliculaModal = new pelicula();
        document.getElementById("cerrarModal")?.click();
        console.log(this.listaPeliculas);
    }
    edicionPelicula(getPelicula:pelicula){
        this.peliculaModal = getPelicula;
        this.peliculaModal.edicion = true;
    }
    validHorario():boolean{
        if(this.peliculaModal.horario < 0 || this.peliculaModal.horario > 24){
            return false;
        }
        return true;
    }
    validarDuracion():boolean{
        if(this.peliculaModal.duracion <0){
            return false;
        }
        return true;
    }
}
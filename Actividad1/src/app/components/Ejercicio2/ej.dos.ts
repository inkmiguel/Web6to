import { Component } from "@angular/core";
import { pelicula } from "src/app/estructuras/general";
import { Firestore, collection, collectionData, doc, query, setDoc, where, deleteDoc } from "@angular/fire/firestore";


@Component({
    selector: 'ej-dos',
    templateUrl: './ej.dos.html',
    styleUrls: ['./ej.dos.css']
})
export class EjDosComponent {

    peliculaModal:pelicula = new pelicula();
    listaPeliculas:pelicula[] = [];
    coleccionPelicula = collection(this.firestore,'Pelicula');

    constructor(private firestore: Firestore){
        let consulta = query(this.coleccionPelicula);
        collectionData(consulta).subscribe((listadoPelicula)=> {
            this.listaPeliculas = new Array();
            listadoPelicula.forEach(peli => {
                let elemento = new pelicula();
                elemento.llenado(peli);
                this.listaPeliculas.push(elemento);

            });
        });
    }

    registrarPelicula(){
        if(!this.validHorario()){
            alert("Horario no válido, debe estar entre 0 y 24");
            return;
        }
        
        if(!this.validarDuracion()){
            alert("Duración no válida, debe ser mayor a 0");
            return;
        }

        this.peliculaModal.peliculaId = this.generarID(15);

        const ruta = doc(this.firestore,'Pelicula',this.peliculaModal.peliculaId);
        setDoc(ruta, JSON.parse(JSON.stringify(this.peliculaModal))).then(()=> {
            this.peliculaModal = new pelicula();
            document.getElementById("cerrarModal")?.click();
        });
    }

    generarID(tamaño:number){
        let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        let id = '';
        let totalLetras = letras.length;
        for(let i = 0; i < tamaño; i++){
            id += letras.charAt(Math.floor(Math.random()* totalLetras))
        }
        return id;
    }

    editarPelicula(){
        const ruta = doc(this.firestore,'Pelicula',this.peliculaModal.peliculaId);
        setDoc(ruta, JSON.parse(JSON.stringify(this.peliculaModal))).then(()=> {
            this.peliculaModal = new pelicula();
            document.getElementById("cerrarModal")?.click();
        });
    }

    eliminarPelicula(getPelicula:pelicula){
        const ruta = doc(this.firestore,'Pelicula',getPelicula.peliculaId);
        deleteDoc(ruta).then(()=> {
            this.peliculaModal = new pelicula();
            document.getElementById("cerrarModal")?.click();
        });
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
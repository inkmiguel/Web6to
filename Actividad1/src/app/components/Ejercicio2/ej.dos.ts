import { Component } from "@angular/core";
import { pelicula } from "src/app/estructuras/general";
import Swal from "sweetalert2";
import { Firestore, collection, collectionData, doc, query, setDoc, where, deleteDoc, orderBy } from "@angular/fire/firestore";


@Component({
    selector: 'ej-dos',
    templateUrl: './ej.dos.html',
    styleUrls: ['./ej.dos.css']
})
export class EjDosComponent {
    peliculaModal:pelicula = new pelicula();
    listaPeliculas:pelicula[] = [];
    coleccionPelicula = collection(this.firestore,'Pelicula');
    filtradoEstatus: string = '';

    constructor(private firestore: Firestore){
        this.limpiarFiltro();
    }
    registrarPelicula(){
        if(!this.validarCamposVacios()){
            this.invocarAlertaNulos();
            return;
        }
        if(!this.validarPersonas()){
            return;
        }
        if(!this.validarDuracion()){
            return;
        }

        this.peliculaModal.peliculaId = this.generarID(15);

        const ruta = doc(this.firestore,'Pelicula',this.peliculaModal.peliculaId);
        setDoc(ruta, JSON.parse(JSON.stringify(this.peliculaModal))).then(()=> {
            this.peliculaModal = new pelicula();
            document.getElementById("cerrarModal")?.click();
            this.invocarAlertaSuccess(); // Ahora la alerta se muestra después de guardar
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
        if(!this.validarCamposVacios()){
            this.invocarAlertaNulos();
        return;
        }
        if(!this.validarPersonas()){
            return;
        }
        if(!this.validarDuracion()){
            return;
        }
        const ruta = doc(this.firestore,'Pelicula',this.peliculaModal.peliculaId);
        setDoc(ruta, JSON.parse(JSON.stringify(this.peliculaModal))).then(()=> {
            this.peliculaModal = new pelicula();
            document.getElementById("cerrarModal")?.click();
            this.invocarAlertaSuccess();
        });
    }
    eliminarPelicula(getPelicula:pelicula){
        const ruta = doc(this.firestore,'Pelicula',getPelicula.peliculaId);
        deleteDoc(ruta).then(()=> {
            this.peliculaModal = new pelicula();
            document.getElementById("cerrarModal")?.click();
        });
    }
    abrirFormulario(){
        this.peliculaModal= new pelicula();
    }

    edicionPelicula(getPelicula:pelicula){
        this.peliculaModal = getPelicula;
        this.peliculaModal.edicion = true;
    }
    filtrarPeliculas(){
        const filtro = query(
            this.coleccionPelicula,
            where('estatus', '==', this.filtradoEstatus),
            orderBy('titulo', 'asc')
        );
        collectionData(filtro).subscribe((listadoPelicula) => {
            this.listaPeliculas = new Array();
            listadoPelicula.forEach(peli => {
                let elemento = new pelicula();
                elemento.llenado(peli);
                this.listaPeliculas.push(elemento);
            });
        });
    }
    limpiarFiltro(){
        const consulta = query(this.coleccionPelicula, orderBy('titulo', 'asc'));
        collectionData(consulta).subscribe((listadoPelicula)=> {
            this.listaPeliculas = new Array();
            listadoPelicula.forEach(peli => {
                let elemento = new pelicula();
                elemento.llenado(peli);
                this.listaPeliculas.push(elemento);

            });
        });
    }
    validarCamposVacios():boolean{
        if(this.peliculaModal.titulo.trim() === '' ||
            this.peliculaModal.horario === null ||
            this.peliculaModal.personas === 0 ||
            this.peliculaModal.sala.trim() === '' ||
            this.peliculaModal.clasificacion.trim() === '' ||
            this.peliculaModal.duracion === 0
        )
            return false;
        return true;
    }
    validarPersonas():boolean{
        if(this.peliculaModal.personas < 1 || this.peliculaModal.personas > 100){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El número de personas debe estar entre 1 y 100.',
            });
            return false;
        }
        return true;
    }
    validarDuracion():boolean{
        if(this.peliculaModal.duracion < 1 || this.peliculaModal.duracion > 300){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La duración debe estar entre 1 y 300 minutos.',
            });
            return false;
        }
        return true;
    }
    invocarAlertaNulos(){
        Swal.fire({
            icon: 'warning',
            title: 'Campos Vacíos',
            text: 'Por favor, complete todos los campos requeridos.',
        });
    }
    invocarAlertaSuccess(){
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'La película se ha registrado correctamente.',
        });
    }
    invocarAlertaEliminar(getPelicula:pelicula){
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarla!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.eliminarPelicula(getPelicula);
                Swal.fire(
                    '¡Eliminada!',
                    'La película ha sido eliminada.',
                    'success'
                );
            }
        });
    }
}
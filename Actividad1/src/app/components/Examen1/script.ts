import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  query,
  setDoc,
  where,
  deleteDoc,
  orderBy,
} from '@angular/fire/firestore';
import { ExamenInterface } from 'src/app/estructuras/general.ex';

@Component({
  selector: 'Examen1',
  templateUrl: './index.html',
  styleUrls: ['./style.css'],
})
export class Examen1Component {
  alumnoModal: ExamenInterface = new ExamenInterface();
  listaAlunnos: ExamenInterface[] = [];
  coleccionAlumnos = collection(this.firestore, 'Alumnos');
  filtradoEstatus: string = '';

  constructor(private firestore: Firestore) {
    this.limpiarFiltro();
  }

  registrarAlumno() {
    this.alumnoModal.id = this.generarID(15);
    const ruta = doc(this.firestore, 'Alumnos', this.alumnoModal.id);
    setDoc(ruta, JSON.parse(JSON.stringify(this.alumnoModal))).then(() => {
      this.alumnoModal = new ExamenInterface();
      document.getElementById('cerrarModal')?.click();
      this.limpiarFiltro();
    });
  }

  editarPelicula() {
    const ruta = doc(this.firestore, 'Alumnos', this.alumnoModal.id);
    setDoc(ruta, JSON.parse(JSON.stringify(this.alumnoModal))).then(() => {
      this.alumnoModal = new ExamenInterface();
      document.getElementById('cerrarModal')?.click();
      this.limpiarFiltro();
    });
  }

  eliminarPelicula(getAlumnos: ExamenInterface) {
    const ruta = doc(this.firestore, 'Alumnos', getAlumnos.id); // CORREGIDO
    deleteDoc(ruta).then(() => {
      this.alumnoModal = new ExamenInterface();
      document.getElementById('cerrarModal')?.click();
      this.limpiarFiltro();
    });
  }

  abrirFormulario() {
    this.alumnoModal = new ExamenInterface();
    this.alumnoModal.edicion = false;
  }

  generarID(tamaño: number) {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let id = '';
    for (let i = 0; i < tamaño; i++) {
      id += letras.charAt(Math.floor(Math.random() * letras.length));
    }
    return id;
  }

  limpiarFiltro() {
    const consulta = query(this.coleccionAlumnos, orderBy('apellido', 'asc'));
    collectionData(consulta).subscribe((listaAlunnos) => {
      this.listaAlunnos = [];
      listaAlunnos.forEach((alum) => {
        const elemento = new ExamenInterface();
        elemento.llenarCampos(alum);
        this.listaAlunnos.push(elemento);
      });
    });
  }

  // Futuro uso
  listaAspirantes() {
    // Por implementar si se requiere filtrado adicional
  }
}

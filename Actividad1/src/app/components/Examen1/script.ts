import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  query,
  setDoc,
  where,
  deleteDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'examen1',
  templateUrl: './index.html',
  styleUrls: ['./style.css'],
})
export class Examen1Component {
  constructor() {}

  activarAlerta() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}

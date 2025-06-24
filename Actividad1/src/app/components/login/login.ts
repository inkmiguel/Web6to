import { Component } from "@angular/core";
import { pelicula } from "src/app/estructuras/general";
import { Firestore, collection, collectionData, doc, query, setDoc, where, deleteDoc, orderBy } from "@angular/fire/firestore";
import { usuario } from "src/app/estructuras/usuario";
import { Route, Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class loginComponent {
    public usuario: usuario;
    usuarioDB = collection(this.firestore, 'usuarios')

    constructor(private firestore: Firestore, private redirectio: Router){
        this.usuario = new usuario();
    }
    login(){
        const queryUsuario = query(this.usuarioDB, where('email', '==', this.usuario.email), where('password', '==', this.usuario.password));
        collectionData(queryUsuario).subscribe((getUsuario) => {
            if(getUsuario.length > 0){
                this.usuario.id = getUsuario[0].id;
                this.usuario.name = getUsuario[0].name;
                this.usuario.lastName = getUsuario[0].lastName;
                this.usuario.userName = getUsuario[0].userName;
                this.redirectio.navigate(['/Formulario'],{state: this.usuario})
                return
            }
            return alert('Usuario no encontrado');
        })
    }
}
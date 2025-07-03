import { Component, Input } from "@angular/core";
import { Firestore, collection, collectionData, doc, query, setDoc, where, deleteDoc, orderBy } from "@angular/fire/firestore";
import { usuario } from "src/app/estructuras/usuario";
import { Router } from "@angular/router";
import { images } from "src/imgs/images";

@Component({
    selector: 'barra',
    templateUrl: './index.html',
    styleUrls: ['./styles.css']
})

export class navbar {
    @Input() getUser = new usuario();
    images = images.navbarImage;
    constructor (){}
}
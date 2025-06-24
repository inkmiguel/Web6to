export class ExamenInterface {
    id: string = '';
    nombre: string = '';
    apellido: string = '';
    experiencia: number = 0;
    fecha: string = '';
    municipiio: string = '';
    edad: number = 0;
    puesto: string = '';
    estatus: string = '';
    edicion: boolean = false; 
    

    constructor(){}

    llenarCampos(data: any){
        this.id = data.id
        this.nombre = data.nombre
        this.apellido = data.apellido
        this.edad = data.edad
        this.experiencia = data.experiencia
        this.fecha = data.fecha
        this.municipiio = data.municipiio
        this.puesto = data.puesto
        this.estatus = data.estatus
    }
}
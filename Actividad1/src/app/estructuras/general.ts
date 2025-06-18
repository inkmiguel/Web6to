export class pelicula {

    peliculaId: string = '';
    titulo: string = '';
    horario:string = '';
    personas:number = 0;
    sala:string = ''; 
    clasificacion:string = ''; //tambien select de al menos 5
    duracion:number = 0;
    descripcion:string = '';
    edicion: boolean = false; 
    estatus: string = 'Pendiente Revision';

    constructor(){

    }

    llenado(data: any){
        this.peliculaId = data.peliculaId;
        this.titulo = data.titulo;
        this.horario = data.horario || 0;
        this.personas = data.personas || 0;
        this.sala = data.sala;
        this.clasificacion = data.clasificacion;
        this.duracion = data.duracion || 0;
        this.descripcion = data.descripcion;
        this.estatus = data.estatus;        
    };
};
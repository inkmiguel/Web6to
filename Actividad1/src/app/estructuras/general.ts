export class pelicula {

    peliculaId: string = '';
    titulo: string = '';
    horario:number = 0;
    personas:number = 0;
    sala:string = ''; 
    clasificacion:string = ''; //tambien select de al menos 5
    duracion:number = 0;
    descripcion:string = '';
    edicion: boolean = false; 

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
    };
};
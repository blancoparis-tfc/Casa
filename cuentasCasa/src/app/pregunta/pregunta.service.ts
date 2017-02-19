import { Injectable } from '@angular/core';

export class Opcion{
    constructor(public apartado:string,public solucion:string,public correcta:boolean,public estado:string=''){}
}
export class Pregunta{
    constructor(public bloque:string,public numero:number,public enunciado:string,public anulada:boolean,public opciones:Array<Opcion>){}
}

@Injectable()
export class PreguntaService {

  constructor() { }

}

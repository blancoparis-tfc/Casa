import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';

export class Opcion{
    constructor(
         public apartado:string
        ,public solucion:string
        ,public correcta:boolean
        ,public estado:string=''){}
}
export class Pregunta{
    constructor(
         public bloque:string
        ,public numero:number
        ,public enunciado:string
        ,public anulada:boolean
        ,public opciones:Array<Opcion>){}
}

export class Cuestionario{
    constructor(
        public id:number,
        public descripcion:string,
        public preguntas:Array<Pregunta>
    ){}
}

@Injectable()
export class CuestionarioService {

  url = "app/cuestionario"

  headers:Headers;

  constructor(private http: Http) { 
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  public get(id:number):Observable<Cuestionario>{
    console.info('get ',id)
    return this.http.get(this.url+"/"+id)
      .map((r:Response)=> this.parser(r.json().data));
  }

  private parser(data:any):Cuestionario{
    return new Cuestionario(
       parseInt(data.id)//id
      ,data.descripcion// descripcion
      //,null
      ,this.parserPreguntas(data.preguntas)// pregutas
      );
  } 

  private parserPreguntas(data:Array<any>):Array<Pregunta>{
    return data.map((pregunta)=> new Pregunta(
      pregunta.bloque,//bloque
      parseInt(pregunta.numero), // Número
      pregunta.enunciado,// Enunciado.
      pregunta.anulada.toLowerCase() === 'true',//anulada
      this.parserOpciones(pregunta.opciones) // opciones
    ));
  }

  private parserOpciones(data:Array<any>):Array<Opcion>{
    return data.map((opcion)=>new Opcion(
      opcion.apartado,//apartado
      opcion.solucion,// solucion
      opcion.correcta.toLowerCase() === 'true'//correcta
    ));
  }

}

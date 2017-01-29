import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'
import { Observable } from 'rxjs'
import { extractData, handleError } from '../core/service.utils'
import { environment } from '../../environments/environment'
export class Articulo {
  constructor(public id: number, public nombre: string, public descripcion: string, public cantidad: number, public precio: number) {
  }
}

@Injectable()
export class ArticuloService {

  url = "app/articulos"

  idMock = 0;

  public headers;


  constructor(private http: Http) {
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
    if (!environment.production) {
      this.getArticulos().subscribe(data => {
        if (data.length > 0) {
          let ids = data.map(dato => dato.id).sort((izd, der) => der - izd);
          this.idMock = ids[0] + 1;
        }
      })
    }
  }
  public get(id:number):Observable<Articulo>{
    return this.http.get(this.url+"/"+id)
      .map((r:Response)=> this.parser(r.json().data));
  }

  public getArticulos(): Observable<Articulo[]> {
    return this.http.get(this.url)
      .map((r: Response) => r.json().data)
      .map(lista =>lista.map(data =>this.parser(data)));
  }

  private parser(data:any):Articulo{
    return new Articulo(
          parseInt(data.id)
          , data.nombre, data.descripcion
          , parseInt(data.cantidad)
          , parseInt(data.precio))
  } 

  public crear(articulo: Articulo): Observable<Articulo> {
    if (!environment.production) {
      articulo.id = this.idMock++;
    }
    return this.http.post(this.url, JSON.stringify(articulo), { headers: this.headers })
      .map(extractData)
      .catch((error) => handleError(error));
  }

  public actualizar(articulo:Articulo):Observable<Articulo>{
    console.info(articulo.id)
    return this.http.put(this.url+"/"+articulo.id, JSON.stringify(articulo), { headers: this.headers })
      .map(extractData)
      .catch((error) => handleError(error));
  }

  public eliminar(id:number):Observable<Articulo>{
    return this.http.delete(this.url+"/"+id,this.headers)
          .catch((error) => handleError(error));
  }
}
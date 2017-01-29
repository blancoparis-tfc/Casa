import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'

export class Categoria {
  constructor(public id: Number, public descripcion: String) { }
}

@Injectable()
export class CategoriaService {

  url = "app/categoria"

  constructor(private http: Http) { }

  public getCategorias(): Observable<Categoria[]> {
    return this.http.get(this.url)
      .map((r: Response) => r.json().data)
      .map(lista =>
        lista.map(data => new Categoria(
          parseInt(data.id)
          , data.descripcion)
        )
      );
  }
}

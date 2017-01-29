import { Component, OnInit } from '@angular/core';
import { Articulo, ArticuloService } from './articulo.service'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers:[ArticuloService]
})
export class ArticuloComponent implements OnInit {

  articulos:Articulo[];
  
  constructor(private articuloService:ArticuloService) { }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe(data=>this.articulos=data);
  }

  eliminar(id:number){
    this.articuloService.eliminar(id).subscribe(data=>console.info('eliminado'));
  }

}

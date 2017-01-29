import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  entorno:String="DESARROLLO";

  constructor() { }

  ngOnInit() {
    if(environment.production){
      this.entorno="PRODUCCIÓN"
    }  
  }

}

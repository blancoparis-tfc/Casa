import { Component, OnInit } from '@angular/core';
import {Cuestionario,CuestionarioService} from './cuestionario.service'
@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
  providers:[CuestionarioService]
})
export class CuestionarioComponent implements OnInit {

  cuestionario:Cuestionario = new Cuestionario(null,null,[])

  constructor(private cuestionarioService:CuestionarioService ) { }

  ngOnInit() {
    this.cuestionarioService.get(1).subscribe(data => this.cuestionario = data)
  }

  corregir(){
    console.info("Corregir");
  }
}

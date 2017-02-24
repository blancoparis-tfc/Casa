import { Component, OnInit, EventEmitter } from '@angular/core';
import { Cuestionario, CuestionarioService, Pregunta } from './cuestionario.service'
@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
  providers: [CuestionarioService]
})
export class CuestionarioComponent implements OnInit {

  focusEvent = new EventEmitter();

  cuestionario: Cuestionario = new Cuestionario(null, null, [])

  constructor(private cuestionarioService: CuestionarioService) { }

  ngOnInit() {
    this.cuestionarioService.get(1).subscribe(data => this.cuestionario = data)
  }

  corregir() {
    this.cuestionario.correctas = this.cuestionario.preguntas.filter(pregunta => pregunta.opcion.correcta).length;
  }
  cambiar(i:number) {
        if(this.cuestionario.preguntas.length>i+1){
          this.focusEvent.emit(this.cuestionario.preguntas[i+1].opcionComponente);
        }
  }
}

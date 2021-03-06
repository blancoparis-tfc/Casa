import { Component, OnInit, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { Cuestionario, CuestionarioService, Pregunta } from './cuestionario.service'
import { PreguntaComponent, StatusPregunta } from './pregunta/pregunta.component'


@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css'],
  providers: [CuestionarioService]
})
export class CuestionarioComponent implements OnInit {

  focusEvent = new EventEmitter();

  cuestionario: Cuestionario = new Cuestionario(null, null, [])

  corregido: Boolean;



  @ViewChildren(PreguntaComponent) preguntas: QueryList<PreguntaComponent>

  constructor(private cuestionarioService: CuestionarioService) { }

  ngOnInit() {
    this.cuestionarioService.get(1).subscribe(data => this.cuestionario = data)
    this.corregido=false;
  }

  corregir() {
    this.cuestionario.correctas = this.preguntas.filter(preguntaComponente => preguntaComponente.corregir()).length;
    this.corregido=true;
    this.cambiar(-1);
  }

  cambiar(i: number) {
    if (this.cuestionario.preguntas.length > i + 1) {
      this.focusEvent.emit(this.preguntas.toArray()[i+1].opcionComponent);
    }
  }

  filtrarValidos(){
    this.preguntas.forEach(preguntaComponente => preguntaComponente.filtrar(StatusPregunta.CORRECTA))
  }

  filtrarErrores(){
    this.preguntas.forEach(preguntaComponente => preguntaComponente.filtrar(StatusPregunta.ERROR))
  }
  resetear(){
    this.preguntas.forEach(preguntaComponente => preguntaComponente.reset)
  }
}
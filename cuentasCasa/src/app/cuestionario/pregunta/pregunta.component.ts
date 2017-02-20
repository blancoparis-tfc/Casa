import { Component, OnInit, Input } from '@angular/core';
import {Pregunta} from '../cuestionario.service'

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {


  @Input('pregunta') public pregunta:Pregunta

  opcionSeleccion="-1"

  constructor() { }

  ngOnInit() {
  }

}

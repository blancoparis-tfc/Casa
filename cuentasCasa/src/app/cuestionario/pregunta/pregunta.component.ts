import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MdRadioButton } from '@angular/material'
import { Pregunta } from '../cuestionario.service'

export enum StatusPregunta {
  NADA, CORRECTA, ERROR
}

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {

  @Input('pregunta') public pregunta: Pregunta

  @ViewChild(MdRadioButton) opcionComponent: MdRadioButton

  opcionSeleccion = "-1"

  private status: StatusPregunta = StatusPregunta.NADA

  constructor() { }

  ngOnInit() {
  }

  corregir(): boolean {
    this.status = this.pregunta.opcion.correcta ? StatusPregunta.CORRECTA : this.pregunta.opcion.apartado==""?StatusPregunta.NADA: StatusPregunta.ERROR
    return this.pregunta.opcion.correcta;
  }
}

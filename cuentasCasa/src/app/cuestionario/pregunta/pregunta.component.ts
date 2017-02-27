import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {MdRadioButton} from '@angular/material'
import {Pregunta} from '../cuestionario.service'

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {


  @Input('pregunta') public pregunta:Pregunta

  @ViewChild(MdRadioButton ) opcionComponent: MdRadioButton

  opcionSeleccion="-1"

  constructor() { }

  ngOnInit() {
  }

  corregir():boolean{
    return this.pregunta.opcion.correcta;  
  }
}

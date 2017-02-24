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

  @ViewChild(MdRadioButton )// _inputElement: MdRadioButton
    set pane(v: MdRadioButton) {
   
      console.info(this.pregunta)
 this.pregunta.opcionComponente=v;  
}

  opcionSeleccion="-1"

  constructor() { }

  ngOnInit() {
   // console.info('El foco',this._inputElement);
    //this.pregunta.opcionComponente=this._inputElement;
  }

  focus(){
    console.info('El foco');//,this._inputElement);
    //this._inputElement.focus();
    //this._inputElement.focus();

  }
}

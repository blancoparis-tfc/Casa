import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioComponent } from './cuestionario.component';
import { PreguntaComponent } from './pregunta/pregunta.component'
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import {FocusDirectiveDirective} from '../core/focus-directive.directive'

describe('CuestionarioComponent', () => {
  let component: CuestionarioComponent;
  let fixture: ComponentFixture<CuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioComponent,PreguntaComponent,FocusDirectiveDirective ],
      imports:[
        FormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

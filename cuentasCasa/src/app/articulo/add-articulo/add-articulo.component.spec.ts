/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CategoriaService } from '../categoria.service'
import { AddArticuloComponent } from './add-articulo.component';
import { MaterialModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMen } from '../../InMen.service';
import { FormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';



import { Subscription } from 'rxjs/Subscription';

describe('AddArticuloComponent', () => {
  let component: AddArticuloComponent;
  let fixture: ComponentFixture<AddArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddArticuloComponent],
      imports: [
        FormsModule,
        MaterialModule.forRoot(),
        InMemoryWebApiModule.forRoot(InMen),
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Revisar el titulo`, done => {
    let fixture = TestBed.createComponent(AddArticuloComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toContain('Añadir un Articulo');
    done();
  });
  it(`Cajas de texto`, done => {
    let fixture = TestBed.createComponent(AddArticuloComponent);
    fixture.detectChanges(); // Lo tenemos que poner por un error del test.
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled
      .querySelector('md-input-container input')
      .attributes.placeholder.textContent)
      .toContain('Nombre');
    expect(compiled
      .querySelector('md-input-container textarea')
      .attributes.placeholder.textContent)
      .toContain('Descripcion');
    expect(compiled.querySelector('button').textContent)
      .toContain('Guardar');
    expect(compiled
      .querySelector('md-select')
      .attributes.placeholder.textContent)
      .toContain('Categoria');
    done();
  });

});

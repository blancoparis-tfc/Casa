/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArticuloComponent } from './articulo.component';
import { MaterialModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMen } from '../InMen.service';

import 'hammerjs';


describe('ArticuloComponent', () => {
  let component: ArticuloComponent;
  let fixture: ComponentFixture<ArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloComponent ],
      imports:[
            MaterialModule.forRoot(),
                    InMemoryWebApiModule.forRoot(InMen),

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Revisar el titulo`, done => {
    let fixture = TestBed.createComponent(ArticuloComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toContain('Articulos');
    expect(compiled.querySelector('md-toolbar a md-icon').textContent).toContain('add');
    done()
  });
});

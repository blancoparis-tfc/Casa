/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';

import 'hammerjs';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
            MaterialModule.forRoot()
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Se espera que el titulo (Gastos caseros)!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Gastos caseros');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').textContent).toContain('Gastos caseros');
  }));
  it('rendirizado icono menu menu', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar button md-icon').textContent).toContain('more_vert');
  }));
});

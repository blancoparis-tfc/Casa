/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticuloService, Articulo } from './articulo.service';

import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Injector, Provider } from '@angular/core';
import '../rxjs-extensions';
import 'rxjs/add/operator/map';


describe('ArticuloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        ArticuloService
      ]
    });
  });

  it('should ...', inject([ArticuloService], (service: ArticuloService) => {
    expect(service).toBeTruthy();
  }));
  describe('ArticuloService Http', () => {
    let subject: ArticuloService = null;
    let backend: MockBackend = null;

    beforeEach(inject([ArticuloService, MockBackend]
      , (userService: ArticuloService, mockBackend: MockBackend) => {
      subject = userService;
      backend = mockBackend;
    }));

    it('getArticulos ...', done => {
      expect(subject).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify({
            data: [
              { id: '1', nombre: 'Leche entera', descripcion: 'Cartones de leche', cantidad: '2', precio: '2', categorias: ['Comida'] },
              { id: '2', nombre: 'Papel higinico', descripcion: 'Papel de higienico, precio unidad', cantidad: '36', precio: '2', categorias: ['Consumible'] },
            ]
          })
        });
        connection.mockRespond(new Response(options));
      });
      subject.getArticulos().subscribe(data => {
        expect(data.length).toEqual(2);
        let elemento1 = data[0];
        let elemento2 = data[1];
        expect(elemento1).toEqual(new Articulo(1, 'Leche entera', 'Cartones de leche', 2, 2))
        expect(elemento2).toEqual(new Articulo(2, 'Papel higinico', 'Papel de higienico, precio unidad', 36, 2))
        done();
      })
    });
   /* it('crera articulo ...', done =>{
      let articulo= new Articulo(3,'nombre','descripcion',1,2);
      subject.crear(articulo).subscribe(data=>done());
   //   done();
    })*/
  });
});
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoriaService, Categoria } from './categoria.service';

import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Injector, Provider } from '@angular/core';

import '../rxjs-extensions';
import 'rxjs/add/operator/map';
describe('CategoriaService', () => {
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

        CategoriaService
      ]
    });
  });

  it('should ...', inject([CategoriaService], (service: CategoriaService) => {
    expect(service).toBeTruthy();
  }));
  describe('CategoriaService http',()=>{
    let subject:CategoriaService = null;
    let backend:MockBackend = null;
    beforeEach(inject([CategoriaService, MockBackend]
      , (userService: CategoriaService, mockBackend: MockBackend) => {
      subject = userService;
      backend = mockBackend;
    }));
    it('prueba de datos',done =>{
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify({
            data: [
              { id: '1', descripcion: 'Consumible' },
              { id: '2', descripcion: 'Alimentación' },
            ]
          })
        });
        connection.mockRespond(new Response(options));
      });
    subject.getCategorias().subscribe(data => {
        expect(data.length).toEqual(2);
        let elemento1 = data[0];
        let elemento2 = data[1];
        expect(elemento1).toEqual(new Categoria(1, 'Consumible'))
        expect(elemento2).toEqual(new Categoria(2, 'Alimentación'))
        done();
      });
    });
  });
});

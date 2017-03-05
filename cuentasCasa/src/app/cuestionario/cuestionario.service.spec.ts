import { TestBed, inject } from '@angular/core/testing';
import { CuestionarioService } from './cuestionario.service';

import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
/*
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMen } from '../InMen.service';
*/

import '../rxjs-extensions';
import 'rxjs/add/operator/map';


describe('CuestionarioService', () => {
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
        CuestionarioService
        ]
    });
  });

  it('should ...', inject([CuestionarioService], (service: CuestionarioService) => {
    expect(service).toBeTruthy();
}));
  describe('CuestionarioService Http', () => {
    let subject: CuestionarioService = null;
    let backend: MockBackend = null;

    beforeEach(inject([CuestionarioService, MockBackend]
      , (userService: CuestionarioService, mockBackend: MockBackend) => {
      subject = userService;
      backend = mockBackend;
    }));

    it('get ...', done => {
      expect(subject).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify({
            data: 
            { id: '1' , descripcion:'Examen', preguntas:[
                {
                    bloque:'1'
                    ,numero:'1'
                    ,enunciado:'¿Pregunta?'
                    ,anulada:'false'
                    ,opciones:[
                        {
                            apartado:'a'
                            ,solucion:'apartado a'
                            ,correcta:'true'
                            ,estado:''
                        },
                        {
                            apartado:'b'
                            ,solucion:'apartado b'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'c'
                            ,solucion:'apartado c'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'d'
                            ,solucion:'apartado d'
                            ,correcta:'false'
                            ,estado:''
                        }                        
                    ]
                }
            ]}
          
          })
        });
        connection.mockRespond(new Response(options));
      });
      subject.get(1).subscribe(data => {
        expect(data.id).toEqual(1)
        expect(data.descripcion).toEqual('Examen')
        expect(data.preguntas.length).toEqual(1)
        let pregunta=data.preguntas[0]
        expect(pregunta.bloque).toEqual('1')
        expect(pregunta.numero).toEqual(1)
        expect(pregunta.enunciado).toEqual('¿Pregunta?')
        expect(pregunta.anulada).toEqual(false)
        expect(pregunta.opciones.length).toEqual(4)
        let opcion1=pregunta.opciones[0];
        let opcion2=pregunta.opciones[1];
        let opcion3=pregunta.opciones[2];
        let opcion4=pregunta.opciones[3];
        expect(opcion1.apartado).toEqual('a')
        expect(opcion1.solucion).toEqual('apartado a')
        expect(opcion1.correcta).toEqual(true)

        expect(opcion2.apartado).toEqual('b')
        expect(opcion2.solucion).toEqual('apartado b')
        expect(opcion2.correcta).toEqual(false)

        expect(opcion3.apartado).toEqual('c')
        expect(opcion3.solucion).toEqual('apartado c')
        expect(opcion3.correcta).toEqual(false)

        expect(opcion4.apartado).toEqual('d')
        expect(opcion4.solucion).toEqual('apartado d')
        expect(opcion4.correcta).toEqual(false)
        /*
                        {
                            apartado:'a'
                            ,solucion:'apartado a'
                            ,correcta:'true'
                            ,estado:''
                        },
                        {
                            apartado:'b'
                            ,solucion:'apartado b'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'c'
                            ,solucion:'apartado c'
                            ,correcta:'false'
                            ,estado:''
                        },
                        {
                            apartado:'d'
                            ,solucion:'apartado d'
                            ,correcta:'false'
                            ,estado:''
                        }                        

        
         */

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

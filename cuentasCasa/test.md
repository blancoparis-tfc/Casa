# Errores

Son los datos de los errores:

## Cannot read property 'unsubscribe' of undefined

Cuando nos de esta error, al menos nos ha surgido en el un test, con el componente md-menu.

En este caso se tiene que llamar al ngInit, para que esto sucedda tienen que llamar

``` typescript
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
```

## Problema con el http

Mirar esta url https://semaphoreci.com/community/tutorials/testing-angular-2-http-services-with-jasmine

Vamos a ver como configurar en angular un backend para los servicios, angular 2 nos proporciona uno **MockBackend**

Vamos a ver como hacer los datos.

``` typescript
import {Http, BaseRequestOptions, Response} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {Injector, Provider} from '@angular/core';

```
> Los elementos que vamos a importar

Ponemos los proveedores:

``` typescript
         MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
```
> Lo ponemos los providers

PAra poder usarlo, tenemos que crear un describe por debajo vincular los objetos injetactos y utilizar el done para saber si han llegado los datos.

- 1º Cargamos el mock y el servicio.
- 2º Mockeamos la salida que nos interesa.
- 3º Verificamos los datos.

``` typescript
  describe('ArticuloService Http', () => {
    let subject: ArticuloService = null;
    let backend: MockBackend = null;

    beforeEach(inject([ArticuloService, MockBackend], (userService: ArticuloService, mockBackend: MockBackend) => {
      subject = userService;
      backend = mockBackend;
    }));

    it('getArticulos ...',done => {
      expect(subject).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
          body: JSON.stringify({data:[
              { id: '1', nombre:'Leche entera', descripcion:'Cartones de leche',cantidad:'2',precio:'2',categorias:['Comida']},
              { id: '2', nombre:'Papel higinico', descripcion:'Papel de higienico, precio unidad',cantidad:'36',precio:'2',categorias:['Consumible']},
          ]})
        });
        connection.mockRespond(new Response(options));
      });
      subject.getOpciones().subscribe(data=>{
          expect(data.length).toEqual(2);
          done();
      })
    });
  });
```
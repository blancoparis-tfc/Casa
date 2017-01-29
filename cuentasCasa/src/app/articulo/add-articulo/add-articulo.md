# Añadir un articulo.

Esta funcionalidad se encarga de añadir un articulo.

## Pantalla.

Se va a componer, de una cabecera y un formulario con los siguientes datos:

* **Nombre:** Es el nombre del articulo.
* **Descripcion:** Es la descripcion del articulo.
* **Precio:** Los precios.


# TEST

Para los test he tenido que usar el detectChanges(), por el componente md-select 


## Error con el ngModel.

En este caso tenemos que importar el formModule, para que lo tenga en cuenta.

```typescript
import { FormsModule } from '@angular/forms';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddArticuloComponent],
      imports: [
        FormsModule,

```
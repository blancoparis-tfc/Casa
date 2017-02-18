import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gastos caseros';
  // Los filtros.
  buscarCtrl: FormControl;
  filteredBuscar: any;
  buscar = [
    "Leche","Papel"
  ];

  constructor() {
    this.buscarCtrl = new FormControl();
    this.filteredBuscar = this.buscarCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterBuscar(name));
  }

  
  filterBuscar(val: string) {
    return val ? this.buscar.filter((s) => new RegExp(val, 'gi').test(s)) : this.buscar;
  }

}

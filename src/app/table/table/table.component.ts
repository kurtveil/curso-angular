import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../country';
import { NgbdTableFiltering } from '../country.service';
import { NgbdSortableHeader, SortEvent } from '../sortable.directive';
import { map, startWith } from 'rxjs/operators';

@Component(
  {
    selector: 'ngbd-table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    providers: [NgbdTableFiltering, DecimalPipe]
  })
export class NgbdTableComponent {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: NgbdTableFiltering) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }
  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  prueba(nombre: string) {
    alert(nombre);
  }
}


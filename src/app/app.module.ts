import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// componentes
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListadoPersonaComponent } from './listado-persona/listado-persona.component';
import { NgbdTableComponent } from '../app/table/table/table.component';
import { NgbdSortableHeader } from './table/sortable.directive';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    CalculadoraComponent,
    ListadoPersonaComponent,
    NgbdTableComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent , NgbdTableComponent],
  exports: [NgbdTableComponent ]
})
export class NgbdTableCompleteModule {
  agregarpersona = false;

 }

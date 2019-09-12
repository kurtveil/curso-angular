import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  agregarPersona = false;
  agregarPersonaStatus = 'No se ha agregado ninguna persona';
  // event binding
  tituloPersona1 = 'Kurt Rodriguez';
  // two way binding
  tituloPersona = 'Ingeniero';
  // ngIf
  personaAgregada = false;

  constructor() {
    setTimeout (
      () => {
        this.agregarPersona = true;
      }
      , 3000);
  }

  onCrearPersona() {
    this.personaAgregada = true;
    this.agregarPersonaStatus = 'Persona Agregada';
  }

  onModificarPersona(event: Event) {
    this.tituloPersona = (event.target as HTMLInputElement).value;
  }

  ngOnInit() {
  }

}

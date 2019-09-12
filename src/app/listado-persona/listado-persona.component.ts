import { Persona } from './../persona.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {
titulo = 'Listado de personas';
persona: Persona[] = [new Persona('Kurt', 'Rodriguez'), new Persona('camilo', 'corredor ')];
nombreInput: string;
apellidoInput: string;

constructor() { }

  ngOnInit() {
  }
  onAgregarPersona() {
    const persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.persona.push(persona1);
  }

}

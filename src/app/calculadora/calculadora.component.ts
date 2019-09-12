import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  valor1: number;
  valor2: number;
  resultado: number;
  constructor() { }

  ngOnInit() {
  }
  suma(): void {
    this.resultado = this.valor1 + this.valor2;
  }

}

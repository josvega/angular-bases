import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `

  <h2>Contador</h2>
  <p>Contador: {{ counter }}</p>
  <button (click)="this.cambiarContador(+1)">Sumar</button>
  <button (click)="this.cambiarContador(-1)">Restar</button>

  `
})
export class CounterComponent {
  counter: number = 10;

  cambiarContador( vnValor: number ): void {
    this.counter += vnValor;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = 'ironman';
  public edad:   number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerDescripcion(): string {
    return ` ${this.nombre} - ${this.edad} `
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 25;
  }

  restablecer(): void {
    this.nombre = 'ironman';
    this.edad   = 45;
  }

}

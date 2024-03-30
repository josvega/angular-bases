import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public nombreHeroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public heroeBorrado?: string;

  removerUltimoHeroe(): void {
    this.heroeBorrado = this.nombreHeroes.pop();
  }

}

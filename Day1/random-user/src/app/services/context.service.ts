import { Injectable } from '@angular/core';
import { ElementoNav } from '../models/elementoNav';

@Injectable()
export class ContextService {
  private titolo = 'RANDOMUSER';
  private vociMenu: ElementoNav[];
  constructor() {
    this.vociMenu = [
      {nome: 'Home', indirizzo: '/home', ordine: 0},
      {nome: 'Gallery', indirizzo: '/gallery', ordine: 1},
      {nome: 'Contact us', indirizzo: '/contact', ordine: 2}
    ];
   }

  getTitle(): string {
    return this.titolo;
  }

  getMenu(): ElementoNav[] {
    return this.vociMenu;
  }
}

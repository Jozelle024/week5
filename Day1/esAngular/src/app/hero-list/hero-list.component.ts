import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}

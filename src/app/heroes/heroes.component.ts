import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  david;
  heroes: Hero[];

  pero:string;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.pero = hero.name + hero.id.toString();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes =>          
      this.heroes = heroes);    
  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
   
    // koga hero od listata e razlicen od kliknatiot, ostanuva, koga e ist so kliknatiot se brise
    this.heroService.deleteHero(hero).subscribe(
      izbriishanHero => {
        this.heroes = this.heroes.filter(h => h !== hero);
      }
    );
  }
}

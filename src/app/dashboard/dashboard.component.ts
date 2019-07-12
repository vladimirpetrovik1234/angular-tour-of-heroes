import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from 'src/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[];
  greshka;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // slice ne go vklucuva posleniot element
      this.heroService.getHeroes()
      .subscribe(heroes =>  {        
        this.heroes = heroes.slice(1, 5);      
      },
      err => {
        console.log("Nastana greshka");
        console.log(err);
        this.greshka = err.statusText;
      }      
    );
  }

  /* Primer za
  komentar vo povekje
  redovi */
}
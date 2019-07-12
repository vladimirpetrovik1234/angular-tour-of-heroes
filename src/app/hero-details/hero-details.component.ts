import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/hero';
import { validateConfig } from '@angular/router/src/config';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  greshka;
  @Input() hero: Hero;
  @Input() vlado:string;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.geteHero();
  }
  
  geteHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);   
           
  }

  save() {
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

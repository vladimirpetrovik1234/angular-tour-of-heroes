import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from 'src/hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private heroService: HeroService) {}
 
  // Push a search term into the observable stream.
 
 
 
 
 
 
 
  search(term: string): void {
    this.searchTerms.next(term.trim());
  }

 

 
 
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
      tap(val => console.log(`TAP: ${val}`)),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}

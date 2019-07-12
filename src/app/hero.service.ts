import { Injectable } from '@angular/core';
import { Hero } from 'src/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class HeroService {


  private heroesUrl = 'api/heroes';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  y = 'test';

  constructor(private http: HttpClient, private messageService: MessageService) { }
  

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }


  getHero(id: number): Observable<Hero>{

    this.y += 't';
    let p = 12;
    p += 5

    // api/heroes/14
    const url = `${this.heroesUrl}/${id}`;

    // TODO: send the message _after_ fetching the hero;
    this.messageService.add(`HeroService: fetched hero id=${id}; Test: ${this.y}`);
    return this.http.get<Hero>(url);
  }

  updateHero(hero: Hero): Observable<any>{
    
    return this.http.put(this.heroesUrl, hero, this.httpOptions);
  }

  /** POST: add a new hero to the server */
addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
}

deleteHero(hero: Hero): Observable<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http.delete<Hero>(url,this.httpOptions);
}

/* GET heroes whose name contains search term */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?id=${term}`);
}


}

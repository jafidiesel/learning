import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];

  terminobusqueda: String;

  constructor(  private _heroesService: HeroesService,
                private router: Router,
                private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.terminobusqueda = params['q'];
      this.heroes = this._heroesService.buscarHeroes( params['q'] );
      console.log(this.heroes);

    } );

  }

  verHeroe( idx:number){
    this.router.navigate( ['/heroe',idx] );
  }


}

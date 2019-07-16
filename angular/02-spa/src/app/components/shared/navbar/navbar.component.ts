import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroesBusqueda: Heroe[] = [];

  constructor(   private _heroesService:HeroesService,
                 private router:Router) {

     }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    this.heroesBusqueda = this._heroesService.buscarHeroes(termino);



    this.router.navigate( ['/search', termino] );
    //console.log( this.heroesBusqueda );


  }

}

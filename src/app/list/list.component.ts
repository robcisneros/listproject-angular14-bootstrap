import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../services/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';

  constructor(activatedRoute:ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    // se subscribe a los cambios de parámetros
    this.activatedRoute.params.subscribe(
      
      (params) => {
        console.log(params.side);
        // this.characters = this.swService.getCharacters(params.side)
        this.characters = this.swService.getCharacters(params['side']);
        this.loadedSide = params['side'];
      }
    );
    this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide)
      }
    );
  }
}

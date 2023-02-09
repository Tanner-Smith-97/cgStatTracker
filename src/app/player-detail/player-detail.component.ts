import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap, tap} from "rxjs";
import {PlayerApiService} from "../services/player-api.service";
import {Player} from "../player";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  protected username$: Observable<string> = this.activatedRoute.params
    .pipe(
      map(value => value['username'])
    );

  protected user$: Observable<Player> = this.username$
    .pipe(
      switchMap(value =>
        this.playerService.getPlayerByName(value)
      ),
    )

  constructor(private activatedRoute: ActivatedRoute,
              private playerService: PlayerApiService) {
  }

}

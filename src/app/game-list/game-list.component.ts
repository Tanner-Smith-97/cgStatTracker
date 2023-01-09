import {Component} from '@angular/core';
import {Game} from "../game";
import {GameApiService} from "../services/game-api.service";
import {BehaviorSubject, map, Observable} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  private games: Game[] = [];

  protected games$: Observable<Game[]> = this.gameApi.query()
    .pipe(
      map(games => {
        this.games = games;
        return this.games;
      })
    )

  constructor(private gameApi: GameApiService) {
  }
}

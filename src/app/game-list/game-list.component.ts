import {Component, Pipe} from '@angular/core';
import {Game} from "../game";
import {GameApiService} from "../services/game-api.service";
import {Observable} from "rxjs";
import {Player} from "../player";
import {PlayerApiService} from "../services/player-api.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  protected players$: Observable<Player[]> = this.playersApiService.getPlayers();
  protected games$: Observable<Game[]> = this.gameApi.getPreviousGames();

  constructor(private gameApi: GameApiService,
              private playersApiService: PlayerApiService) {
  }
}


@Pipe({
  name: 'players',
  pure: true
})
export class CalculatePipe {
  transform(players: Player[], playerId: number): string {
    return players.find(p => p.id === playerId)?.name ?? "missing";
  }
}

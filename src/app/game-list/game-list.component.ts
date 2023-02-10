import {Component, Pipe} from '@angular/core';
import {Game} from "../game";
import {GameApiService} from "../services/game-api.service";
import {Observable, take} from "rxjs";
import {Player} from "../player";
import {PlayerApiService} from "../services/player-api.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateGameDialogComponent} from "../create-game-dialog/create-game-dialog.component";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  protected players$: Observable<Player[]> = this.playersApiService.getPlayers();
  protected games$: Observable<Game[]> = this.gameApi.getPreviousGames();

  constructor(private gameApi: GameApiService,
              private playersApiService: PlayerApiService,
              private dialogService: MatDialog) {
  }

  onCreate() {
    const dialogRef = this.dialogService.open(CreateGameDialogComponent, {});
    dialogRef.afterClosed().pipe(take(1)).subscribe();
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

import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap, take, tap} from "rxjs";
import {PlayerApiService} from "../services/player-api.service";
import {Player} from "../player";
import {MatDialog} from "@angular/material/dialog";
import {CreateDeckDialogComponent} from "../create-deck-dialog/create-deck-dialog.component";
import {DeckApiService} from "../services/deck-api.service";

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
    );

  constructor(private activatedRoute: ActivatedRoute,
              private playerService: PlayerApiService,
              private deckService: DeckApiService,
              private dialogService: MatDialog) {
  }

  public onCreateDeck(username: string): void {
    const createDialogRef = this.dialogService.open(CreateDeckDialogComponent, {})
    createDialogRef.afterClosed()
      .pipe(
        take(1)
      )
      .subscribe(value => {
        this.deckService.createDeck(value.deckName, username)
          .pipe(
            take(1),
            switchMap(value => this.user$ = this.playerService.getPlayerByName(username)),
          )
          .subscribe();
      });

  }
}

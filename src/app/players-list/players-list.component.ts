import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreatePlayerDialogComponent} from "../create-player-dialog/create-player-dialog.component";
import {BehaviorSubject, Observable, Subject, Subscription, take, takeUntil} from "rxjs";
import {PlayerApiService} from "../services/player-api.service";
import {Player} from "../player";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();

  protected players$?: Observable<Player[]>;

  protected headers: string[] = [
    'id',
    'username',
    'mmr'
  ]

  constructor(
    protected dialogService: MatDialog,
    protected playerApiService: PlayerApiService
  ) {

  }

  protected openCreationDialog(): void {
    const dialogRef = this.dialogService.open(CreatePlayerDialogComponent, {
    });

    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.destroyed$)
      )
      .subscribe((result: { username: string }) => {
        console.log("dialog was closed with value", result);
        this.playerApiService.createPlayer(result.username)
          .pipe(
            take(1)
          )
          .subscribe()
      })
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
  }

  public ngOnInit(): void {
    this.players$ = this.playerApiService.getPlayers()
  }
}

import { Injectable } from '@angular/core';
import {forkJoin, map, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {Game} from "../game";
import {HttpClient} from "@angular/common/http";
import {PlayerApiService} from "./player-api.service";
import {DeckApiService} from "./deck-api.service";
import {Player} from "../player";
import {Deck} from "../deck";

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  public uri: string = "https://localhost:7219/GetPreviousGames/";

  constructor(private httpClient: HttpClient,
              private playersService: PlayerApiService,
              private decksService: DeckApiService) {
  }

  public getAvailablePlayersAndDecks(): Observable<{
    players: Player[],
    decks: Deck[]
  }> {
    const players$ = this.playersService.getPlayers();
    const decks$ = this.decksService.query();

    return forkJoin([
      players$,
      decks$
    ])
      .pipe(
        map(value => {
          const [players, decks] = value;
          return {
            players,
            decks
          }
        })
      );
  }

  public query(): Observable<Game[]> {
    if (environment.useFakeData) {
      return this.fakeData();
    }

    return of([] as Game[]);
  }

  public getPreviousGames(numberOfGames = 10): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.uri + numberOfGames)
  }

  private fakeData(): Observable<Game[]> {
    return of([
      {
        id: "1",
        date: new Date(Date.now()),
        gameDetail: []
      },
      {
        id: "2",
        date: new Date(Date.now()),
        gameDetail: []
      },
      {
        id: "3",
        date: new Date(Date.now()),
        gameDetail: []
      },
      {
        id: "4",
        date: new Date(Date.now()),
        gameDetail: []
      },
    ] as Game[])
  }
}

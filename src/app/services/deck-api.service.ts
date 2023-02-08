import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Deck} from "../deck";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeckApiService {
  // TODO: Change this to what it needs to be after api is built
  public uri: string = "https://localhost:5024/decks";

  public query(): Observable<Deck[]> {
    if (environment.useFakeData) {
      return this.fakeData();
    }

    // TODO: replace this with httpclient call to server
    return of([])
  }

  private fakeData(): Observable<Deck[]> {
    return of([
      {
        id: 1,
        deckName: 'Anje Falkenrath',
      },
      {
        id: 2,
        deckName: "Zurgo Helmsmaher"
      },
      {
        id: 3,
        deckName: "Prosper, Tome-Bound"
      },
      {
        id: 4,
        deckName: "Edgar Markov"
      },
      {
        id: 5,
        deckName: "Stromkirk Captain"
      }
    ] as Deck[])
  }
}

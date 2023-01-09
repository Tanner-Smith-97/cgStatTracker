import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {Game} from "../game";

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  public uri: string = "https://localhost:5025/query-games";

  public query(): Observable<Game[]> {
    if (environment.useFakeData) {
      return this.fakeData();
    }

    return of([] as Game[]);
  }

  private fakeData(): Observable<Game[]> {
    return of([
      {
        id: 1,
        date: new Date(Date.now()),
        notes: "These are some notes"
      },
      {
        id: 2,
        date: new Date(Date.now()),
        notes: "These are some notes"
      },
      {
        id: 3,
        date: new Date(Date.now()),
        notes: "These are some notes"
      },
      {
        id: 4,
        date: new Date(Date.now()),
        notes: "These are some notes"
      },
    ] as Game[])
  }
}

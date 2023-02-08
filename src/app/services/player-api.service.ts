import { Injectable } from '@angular/core';
import {Observable, takeUntil} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Player} from "../player";

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {
  private uri: string = "https://localhost:7219/";

  constructor(private http: HttpClient) { }

  public createPlayer(username: string): Observable<void> {
    return this.http.post<void>(this.uri + "CreatePlayer", {
      PlayerName: username
    })
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.uri + "players");
  }
}

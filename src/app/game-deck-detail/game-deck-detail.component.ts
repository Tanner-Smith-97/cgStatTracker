import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Deck} from "../deck";
import {map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-game-deck-detail',
  templateUrl: './game-deck-detail.component.html',
  styleUrls: ['./game-deck-detail.component.css']
})
export class GameDeckDetailComponent implements OnInit {
  protected deck$: Observable<Deck | undefined> | undefined;
  private url: string = "https://localhost:7219/GetDeckById/"

  public deckId: Observable<string> =
    this.route.params.pipe(
      map(value => value["deckId"]),
      tap(value => {
        this.deck$ = this.http.get<Deck>(this.url + `${value}`)
      })
    );

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  public ngOnInit(): void {

  }
}

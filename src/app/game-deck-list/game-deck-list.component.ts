import {Component, Input} from '@angular/core';
import {Deck} from "../deck";
import {map, Observable} from "rxjs";
import {DeckApiService} from "../services/deck-api.service";

@Component({
  selector: 'app-game-deck-list',
  templateUrl: './game-deck-list.component.html',
  styleUrls: ['./game-deck-list.component.css']
})
export class GameDeckListComponent {
  private decks: Deck[] = [];
  protected decks$: Observable<Deck[]> = this.deckApi.query()
    .pipe(
      map(decks => {
        this.decks = decks;
        return this.decks;
      })
    )

  constructor(private deckApi: DeckApiService) {
  }

}

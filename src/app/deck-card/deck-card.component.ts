import {Component, Input, OnInit} from '@angular/core';
import { Deck } from '../deck';
import {CardImageService} from "../services/card-image.service";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-deck-card',
  templateUrl: './deck-card.component.html',
  styleUrls: ['./deck-card.component.css']
})
export class DeckCardComponent implements OnInit {
    @Input() public deck: Deck | undefined;

    public imageUrl: string | undefined;

    public cardImage: Observable<string | undefined> | undefined;

    public deckRoute: string | undefined;

    constructor(private cardImageService: CardImageService) {
    }


    public ngOnInit(): void {
      this.cardImage = this.cardImageService.query(this.deck?.deckName ?? "Anje Falkenrath")
        .pipe(
          tap(
            value => this.imageUrl = value
          )
        );

      this.deckRoute = `/deck/${this.deck?.id}`;
    }
}

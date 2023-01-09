import {Component, Input} from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'app-deck-card',
  templateUrl: './deck-card.component.html',
  styleUrls: ['./deck-card.component.css']
})
export class DeckCardComponent {
    @Input() public deck: Deck | undefined;
}

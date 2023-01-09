import {Component, Input} from '@angular/core';
import {Game} from "../game";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  @Input() public game: Game | undefined;
}

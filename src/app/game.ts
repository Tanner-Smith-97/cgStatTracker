import {Player} from "./player";
import {Deck} from "./deck";

export interface Game {
  id: number;
  date: Date;
  notes: string;
  playersWithDeck: {
    player: Player;
    deck: Deck;
  }[];
}

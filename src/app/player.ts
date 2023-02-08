import {Deck} from "./deck";
import {Game} from "./game";

export interface Player {
  id: number;
  name: string;
  mmr: number;
  gamesPlayed: number;
  gamesWon: number;
  decks?: Deck[];
  games?: Game[];
}

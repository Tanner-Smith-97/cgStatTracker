import {Player} from "./player";
import {Deck} from "./deck";

export interface Game {
  id: string;
  date: Date;

  gameDetail: GameDetails[]
}

export interface  GameDetails {
  gameId: string,
  playerId: number,
  deckId: number,
  playerMmr: number,
  deckMmr: number,
  placement: number
}

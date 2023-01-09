import {Deck} from "./deck";

export interface Player {
  id: number;
  name: string;
  decks: Deck[];
  mmr: number;
}

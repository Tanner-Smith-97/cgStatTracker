import {Player} from "./player";
import {Deck} from "./deck";

export interface Group {
  id: number;
  name: string;
  players: Player[];
}

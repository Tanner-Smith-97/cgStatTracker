export interface Deck {
  id: number;
  deckName: string;
  playerId: number;
  mmr: number;
  gamesPlayed: number;
  gamesWon: number;
  imageUrl?: string;
  deckUrl?: string;
}

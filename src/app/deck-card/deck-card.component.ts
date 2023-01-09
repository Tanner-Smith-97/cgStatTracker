import { Component } from '@angular/core';

@Component({
  selector: 'app-deck-card',
  templateUrl: './deck-card.component.html',
  styleUrls: ['./deck-card.component.css']
})
export class DeckCardComponent {
  public sampleDecks!: Promise<Array<DeckData>>;

    constructor() {
      this.sampleDecks = this.getData();
    }

    public async getData(): Promise<any> {
      const response = await fetch("http://localhost:5024/TestData");
      const body = await response.json();
      console.log(body);
      return body;
    }
    // sampleDecks = [
    //   { deckname: "Anje Falkenrath", winner: false, mmr: "1000" },
    //   { deckname: "Zurgo Helmsmaher", winner: true, mmr: "990" },
    //   { deckname: "Prosper, Tome-Bound", winner: false, mmr: "880" }
    // ]
}

export type DeckData = {
  deckName: string,
  winner: boolean,
  mmr: string
}

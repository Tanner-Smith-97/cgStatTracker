import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameListComponent} from "./game-list/game-list.component";
import {GameDeckListComponent} from "./game-deck-list/game-deck-list.component";
import {GameDeckDetailComponent} from "./game-deck-detail/game-deck-detail.component";
import {PlayersListComponent} from "./players-list/players-list.component";
import {PlayerDetailComponent} from "./player-detail/player-detail.component";

const routes: Routes = [
  {
    path: "games",
    component: GameListComponent
  },
  {
    path: "decks",
    component: GameDeckListComponent
  },
  {
    path: "deck/:deckId",
    component: GameDeckDetailComponent,
  },
  {
    path: "players",
    component: PlayersListComponent
  },
  {
    path: "player/:username",
    component: PlayerDetailComponent
  },
  {
    path: "**",
    redirectTo: "games"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

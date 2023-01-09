import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameListComponent} from "./game-list/game-list.component";
import {GameDeckListComponent} from "./game-deck-list/game-deck-list.component";

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

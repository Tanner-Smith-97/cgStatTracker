import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameCardComponent } from './game-card/game-card.component';
import { DeckCardComponent } from './deck-card/deck-card.component';
import {CalculatePipe, GameListComponent} from './game-list/game-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { GameDeckListComponent } from './game-deck-list/game-deck-list.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import { GameDeckDetailComponent } from './game-deck-detail/game-deck-detail.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { CreatePlayerDialogComponent } from './create-player-dialog/create-player-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { CreateDeckDialogComponent } from './create-deck-dialog/create-deck-dialog.component';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    DeckCardComponent,
    GameListComponent,
    GameDeckListComponent,
    GameDeckDetailComponent,
    PlayersListComponent,
    CreatePlayerDialogComponent,
    PlayerDetailComponent,
    CreateDeckDialogComponent,
    CalculatePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

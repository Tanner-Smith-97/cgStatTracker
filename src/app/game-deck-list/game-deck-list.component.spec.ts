import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDeckListComponent } from './game-deck-list.component';

describe('GameDeckListComponent', () => {
  let component: GameDeckListComponent;
  let fixture: ComponentFixture<GameDeckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDeckListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDeckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

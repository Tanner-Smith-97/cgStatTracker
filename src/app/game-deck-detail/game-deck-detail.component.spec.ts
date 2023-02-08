import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDeckDetailComponent } from './game-deck-detail.component';

describe('GameDeckDetailComponent', () => {
  let component: GameDeckDetailComponent;
  let fixture: ComponentFixture<GameDeckDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDeckDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameDeckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

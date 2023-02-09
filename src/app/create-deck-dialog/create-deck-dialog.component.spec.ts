import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeckDialogComponent } from './create-deck-dialog.component';

describe('CreateDeckDialogComponent', () => {
  let component: CreateDeckDialogComponent;
  let fixture: ComponentFixture<CreateDeckDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDeckDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDeckDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

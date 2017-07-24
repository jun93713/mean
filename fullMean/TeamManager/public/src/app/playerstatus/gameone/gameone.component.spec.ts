import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameoneComponent } from './gameone.component';

describe('GameoneComponent', () => {
  let component: GameoneComponent;
  let fixture: ComponentFixture<GameoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

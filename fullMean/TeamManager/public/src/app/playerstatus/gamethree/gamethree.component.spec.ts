import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamethreeComponent } from './gamethree.component';

describe('GamethreeComponent', () => {
  let component: GamethreeComponent;
  let fixture: ComponentFixture<GamethreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamethreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

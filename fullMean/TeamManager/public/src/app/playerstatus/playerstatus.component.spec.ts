import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstatusComponent } from './playerstatus.component';

describe('PlayerstatusComponent', () => {
  let component: PlayerstatusComponent;
  let fixture: ComponentFixture<PlayerstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

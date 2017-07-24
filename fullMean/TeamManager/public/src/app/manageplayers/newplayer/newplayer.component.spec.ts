import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewplayerComponent } from './newplayer.component';

describe('NewplayerComponent', () => {
  let component: NewplayerComponent;
  let fixture: ComponentFixture<NewplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

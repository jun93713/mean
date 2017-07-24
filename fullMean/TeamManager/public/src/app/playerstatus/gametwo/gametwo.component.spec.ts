import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GametwoComponent } from './gametwo.component';

describe('GametwoComponent', () => {
  let component: GametwoComponent;
  let fixture: ComponentFixture<GametwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GametwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GametwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

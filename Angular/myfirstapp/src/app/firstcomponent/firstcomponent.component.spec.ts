import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcomponentComponent } from './firstcomponent.component';

describe('FirstcomponentComponent', () => {
  let component: FirstcomponentComponent;
  let fixture: ComponentFixture<FirstcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

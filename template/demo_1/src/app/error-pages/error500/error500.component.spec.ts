import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Error500Component } from './error500.component';

describe('Error500Component', () => {
  let component: Error500Component;
  let fixture: ComponentFixture<Error500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

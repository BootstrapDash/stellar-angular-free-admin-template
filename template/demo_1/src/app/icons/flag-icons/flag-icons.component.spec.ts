import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagIconsComponent } from './flag-icons.component';

describe('FlagIconsComponent', () => {
  let component: FlagIconsComponent;
  let fixture: ComponentFixture<FlagIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

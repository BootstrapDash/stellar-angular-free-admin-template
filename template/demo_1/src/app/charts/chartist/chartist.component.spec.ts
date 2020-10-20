import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartistComponent } from './chartist.component';

describe('ChartistComponent', () => {
  let component: ChartistComponent;
  let fixture: ComponentFixture<ChartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

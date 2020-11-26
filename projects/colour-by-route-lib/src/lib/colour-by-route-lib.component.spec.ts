import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourByRouteLibComponent } from './colour-by-route-lib.component';

describe('ColourByRouteLibComponent', () => {
  let component: ColourByRouteLibComponent;
  let fixture: ComponentFixture<ColourByRouteLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourByRouteLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourByRouteLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipingDetailsComponent } from './shiping-details.component';

describe('ShipingDetailsComponent', () => {
  let component: ShipingDetailsComponent;
  let fixture: ComponentFixture<ShipingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipingDetailsComponent]
    });
    fixture = TestBed.createComponent(ShipingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySimsComponent } from './buy-sims.component';

describe('BuySimsComponent', () => {
  let component: BuySimsComponent;
  let fixture: ComponentFixture<BuySimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuySimsComponent]
    });
    fixture = TestBed.createComponent(BuySimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

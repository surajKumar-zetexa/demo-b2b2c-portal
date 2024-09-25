import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysimDetailedComponent } from './buysim-detailed.component';

describe('BuysimDetailedComponent', () => {
  let component: BuysimDetailedComponent;
  let fixture: ComponentFixture<BuysimDetailedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuysimDetailedComponent]
    });
    fixture = TestBed.createComponent(BuysimDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

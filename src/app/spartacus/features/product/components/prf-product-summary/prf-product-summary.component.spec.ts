import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfProductSummaryComponent } from './prf-product-summary.component';

describe('PrfProductSummaryComponent', () => {
  let component: PrfProductSummaryComponent;
  let fixture: ComponentFixture<PrfProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfProductSummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

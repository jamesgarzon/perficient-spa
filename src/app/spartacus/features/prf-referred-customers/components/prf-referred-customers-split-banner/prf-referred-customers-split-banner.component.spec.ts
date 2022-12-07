import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfReferredCustomersSplitBannerComponent } from './prf-referred-customers-split-banner.component';

describe('PrfReferredCustomersSplitBannerComponent', () => {
  let component: PrfReferredCustomersSplitBannerComponent;
  let fixture: ComponentFixture<PrfReferredCustomersSplitBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfReferredCustomersSplitBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfReferredCustomersSplitBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

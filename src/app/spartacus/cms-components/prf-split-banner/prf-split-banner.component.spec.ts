import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfSplitBannerComponent } from './prf-split-banner.component';

describe('PrfReferredCustomersSplitBannerComponent', () => {
  let component: PrfSplitBannerComponent;
  let fixture: ComponentFixture<PrfSplitBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfSplitBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfSplitBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

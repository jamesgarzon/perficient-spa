import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfBannerComponent } from './prf-banner.component';

describe('PrfBannerComponent', () => {
  let component: PrfBannerComponent;
  let fixture: ComponentFixture<PrfBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfProductInfoComponent } from './prf-product-info.component';

describe('PrfProductInfoComponent', () => {
  let component: PrfProductInfoComponent;
  let fixture: ComponentFixture<PrfProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfProductInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

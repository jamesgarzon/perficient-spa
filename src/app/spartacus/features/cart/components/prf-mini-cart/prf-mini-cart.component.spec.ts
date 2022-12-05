import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfMiniCartComponent } from './prf-mini-cart.component';

describe('PrfMiniCartComponent', () => {
  let component: PrfMiniCartComponent;
  let fixture: ComponentFixture<PrfMiniCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfMiniCartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfMiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

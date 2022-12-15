import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfReferredCustomersComponent } from './prf-referred-customers.component';

describe('PrfReferredCustomerComponent', () => {
  let component: PrfReferredCustomersComponent;
  let fixture: ComponentFixture<PrfReferredCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfReferredCustomersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfReferredCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

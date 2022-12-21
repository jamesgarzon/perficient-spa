import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfReferredCustomersListComponent } from './prf-referred-customers-list.component';

describe('PrfReferredCustomersListComponent', () => {
  let component: PrfReferredCustomersListComponent;
  let fixture: ComponentFixture<PrfReferredCustomersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfReferredCustomersListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfReferredCustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

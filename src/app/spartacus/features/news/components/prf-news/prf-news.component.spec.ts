import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrfNewsComponent } from './prf-news.component';

describe('PrfNewsComponent', () => {
  let component: PrfNewsComponent;
  let fixture: ComponentFixture<PrfNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrfNewsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrfNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

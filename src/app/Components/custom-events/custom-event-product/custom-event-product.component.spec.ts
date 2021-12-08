import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventProductComponent } from './custom-event-product.component';

describe('CustomEventProductComponent', () => {
  let component: CustomEventProductComponent;
  let fixture: ComponentFixture<CustomEventProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomEventProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

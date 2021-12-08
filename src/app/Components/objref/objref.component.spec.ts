import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjrefComponent } from './objref.component';

describe('ObjrefComponent', () => {
  let component: ObjrefComponent;
  let fixture: ComponentFixture<ObjrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

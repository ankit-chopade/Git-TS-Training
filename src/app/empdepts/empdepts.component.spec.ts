import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdeptsComponent } from './empdepts.component';

describe('EmpdeptsComponent', () => {
  let component: EmpdeptsComponent;
  let fixture: ComponentFixture<EmpdeptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdeptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

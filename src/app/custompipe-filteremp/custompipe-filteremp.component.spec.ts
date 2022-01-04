import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompipeFilterempComponent } from './custompipe-filteremp.component';

describe('CustompipeFilterempComponent', () => {
  let component: CustompipeFilterempComponent;
  let fixture: ComponentFixture<CustompipeFilterempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustompipeFilterempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompipeFilterempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

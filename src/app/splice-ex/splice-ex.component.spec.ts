import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpliceExComponent } from './splice-ex.component';

describe('SpliceExComponent', () => {
  let component: SpliceExComponent;
  let fixture: ComponentFixture<SpliceExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpliceExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpliceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

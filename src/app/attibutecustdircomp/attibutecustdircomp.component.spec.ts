import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttibutecustdircompComponent } from './attibutecustdircomp.component';

describe('AttibutecustdircompComponent', () => {
  let component: AttibutecustdircompComponent;
  let fixture: ComponentFixture<AttibutecustdircompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttibutecustdircompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttibutecustdircompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

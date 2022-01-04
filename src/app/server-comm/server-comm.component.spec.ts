import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommComponent } from './server-comm.component';

describe('ServerCommComponent', () => {
  let component: ServerCommComponent;
  let fixture: ComponentFixture<ServerCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

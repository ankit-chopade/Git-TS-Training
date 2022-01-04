import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommDemoComponent } from './server-comm-demo.component';

describe('ServerCommDemoComponent', () => {
  let component: ServerCommDemoComponent;
  let fixture: ComponentFixture<ServerCommDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCommDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

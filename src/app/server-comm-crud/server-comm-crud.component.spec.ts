import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommCRUDComponent } from './server-comm-crud.component';

describe('ServerCommCRUDComponent', () => {
  let component: ServerCommCRUDComponent;
  let fixture: ComponentFixture<ServerCommCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCommCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

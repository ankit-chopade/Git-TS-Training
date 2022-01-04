import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommCrudServicesComponent } from './server-comm-crud-services.component';

describe('ServerCommCrudServicesComponent', () => {
  let component: ServerCommCrudServicesComponent;
  let fixture: ComponentFixture<ServerCommCrudServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerCommCrudServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommCrudServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

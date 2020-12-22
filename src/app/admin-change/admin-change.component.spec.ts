import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangeComponent } from './admin-change.component';

describe('AdminChangeComponent', () => {
  let component: AdminChangeComponent;
  let fixture: ComponentFixture<AdminChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

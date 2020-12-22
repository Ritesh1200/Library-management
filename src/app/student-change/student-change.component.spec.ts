import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChangeComponent } from './student-change.component';

describe('StudentChangeComponent', () => {
  let component: StudentChangeComponent;
  let fixture: ComponentFixture<StudentChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

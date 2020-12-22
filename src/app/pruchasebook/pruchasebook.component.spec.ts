import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruchasebookComponent } from './pruchasebook.component';

describe('PruchasebookComponent', () => {
  let component: PruchasebookComponent;
  let fixture: ComponentFixture<PruchasebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruchasebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruchasebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

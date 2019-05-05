import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCompComponent } from './salary-comp.component';

describe('SalaryCompComponent', () => {
  let component: SalaryCompComponent;
  let fixture: ComponentFixture<SalaryCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

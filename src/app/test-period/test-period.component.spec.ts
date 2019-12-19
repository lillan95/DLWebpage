import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPeriodComponent } from './test-period.component';

describe('TestPeriodComponent', () => {
  let component: TestPeriodComponent;
  let fixture: ComponentFixture<TestPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesSidebarComponent } from './sites-sidebar.component';

describe('SitesSidebarComponent', () => {
  let component: SitesSidebarComponent;
  let fixture: ComponentFixture<SitesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavTypesPage } from './page-nav-types.page';

describe('PageNavTypesPage', () => {
  let component: PageNavTypesPage;
  let fixture: ComponentFixture<PageNavTypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNavTypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

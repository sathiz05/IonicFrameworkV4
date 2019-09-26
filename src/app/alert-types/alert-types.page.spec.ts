import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTypesPage } from './alert-types.page';

describe('AlertTypesPage', () => {
  let component: AlertTypesPage;
  let fixture: ComponentFixture<AlertTypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertTypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

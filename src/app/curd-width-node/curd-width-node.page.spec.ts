import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdWidthNodePage } from './curd-width-node.page';

describe('CurdWidthNodePage', () => {
  let component: CurdWidthNodePage;
  let fixture: ComponentFixture<CurdWidthNodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdWidthNodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdWidthNodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

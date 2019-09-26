import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizondalScrollPage } from './horizondal-scroll.page';

describe('HorizondalScrollPage', () => {
  let component: HorizondalScrollPage;
  let fixture: ComponentFixture<HorizondalScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizondalScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizondalScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListPage } from './image-list.page';

describe('ImageListPage', () => {
  let component: ImageListPage;
  let fixture: ComponentFixture<ImageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

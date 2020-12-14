import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadIdsV2Component } from './read-ids-v2.component';

describe('ReadIdsV2Component', () => {
  let component: ReadIdsV2Component;
  let fixture: ComponentFixture<ReadIdsV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadIdsV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadIdsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadIdsComponent } from './read-ids.component';

describe('ReadIdsComponent', () => {
  let component: ReadIdsComponent;
  let fixture: ComponentFixture<ReadIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidlineComponent } from './guidline.component';

describe('GuidlineComponent', () => {
  let component: GuidlineComponent;
  let fixture: ComponentFixture<GuidlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesetnumberComponent } from './createsetnumber.component';

describe('CreatesetnumberComponent', () => {
  let component: CreatesetnumberComponent;
  let fixture: ComponentFixture<CreatesetnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesetnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesetnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

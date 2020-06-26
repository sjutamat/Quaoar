import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditreportComponent } from './creditreport.component';

describe('CreditreportComponent', () => {
  let component: CreditreportComponent;
  let fixture: ComponentFixture<CreditreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

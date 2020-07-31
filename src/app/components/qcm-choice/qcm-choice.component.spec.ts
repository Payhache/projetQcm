import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmChoiceComponent } from './qcm-choice.component';

describe('QcmChoiceComponent', () => {
  let component: QcmChoiceComponent;
  let fixture: ComponentFixture<QcmChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

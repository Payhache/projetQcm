import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmThemesComponent } from './qcm-themes.component';

describe('QcmThemesComponent', () => {
  let component: QcmThemesComponent;
  let fixture: ComponentFixture<QcmThemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmThemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

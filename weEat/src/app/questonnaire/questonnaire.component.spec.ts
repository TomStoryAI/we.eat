import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestonnaireComponent } from './questonnaire.component';

describe('QuestonnaireComponent', () => {
  let component: QuestonnaireComponent;
  let fixture: ComponentFixture<QuestonnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestonnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestonnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

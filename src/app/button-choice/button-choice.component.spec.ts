import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonChoiceComponent } from './button-choice.component';

describe('ButtonChoiceComponent', () => {
  let component: ButtonChoiceComponent;
  let fixture: ComponentFixture<ButtonChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorQuestionnaireComponent } from './selector-questionnaire.component';

describe('SelectorQuestionnaireComponent', () => {
  let component: SelectorQuestionnaireComponent;
  let fixture: ComponentFixture<SelectorQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorQuestionnaireComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

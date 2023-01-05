import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiQuickpanelComponent } from './ui-quickpanel.component';

describe('UiQuickpanelComponent', () => {
  let component: UiQuickpanelComponent;
  let fixture: ComponentFixture<UiQuickpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiQuickpanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiQuickpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

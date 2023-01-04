import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickpanelComponent } from './quickpanel.component';

describe('QuickpanelComponent', () => {
  let component: QuickpanelComponent;
  let fixture: ComponentFixture<QuickpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickpanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(QuickpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

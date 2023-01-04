import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPopoverComponent } from './ui-popover.component';

describe('UiPopoverComponent', () => {
  let component: UiPopoverComponent;
  let fixture: ComponentFixture<UiPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiPopoverComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

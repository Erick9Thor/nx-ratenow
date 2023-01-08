import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSecondaryToolbarComponent } from './ui-secondary-toolbar.component';

describe('UiSecondaryToolbarComponent', () => {
  let component: UiSecondaryToolbarComponent;
  let fixture: ComponentFixture<UiSecondaryToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSecondaryToolbarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiSecondaryToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

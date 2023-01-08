import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgressBarLoaderComponent } from './ui-progress-bar-loader.component';

describe('UiProgressBarLoaderComponent', () => {
  let component: UiProgressBarLoaderComponent;
  let fixture: ComponentFixture<UiProgressBarLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiProgressBarLoaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiProgressBarLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

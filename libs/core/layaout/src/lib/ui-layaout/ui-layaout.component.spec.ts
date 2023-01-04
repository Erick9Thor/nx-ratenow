import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLayaoutComponent } from './ui-layaout.component';

describe('UiLayaoutComponent', () => {
  let component: UiLayaoutComponent;
  let fixture: ComponentFixture<UiLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiLayaoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

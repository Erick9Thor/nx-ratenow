import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPanelToggleComponent } from './config-panel-toggle.component';

describe('ConfigPanelToggleComponent', () => {
  let component: ConfigPanelToggleComponent;
  let fixture: ComponentFixture<ConfigPanelToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigPanelToggleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigPanelToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

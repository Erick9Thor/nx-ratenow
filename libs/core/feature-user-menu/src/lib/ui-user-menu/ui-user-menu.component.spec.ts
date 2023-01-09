import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUserMenuComponent } from './ui-user-menu.component';

describe('UiUserMenuComponent', () => {
  let component: UiUserMenuComponent;
  let fixture: ComponentFixture<UiUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiUserMenuComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

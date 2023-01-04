import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNavigationItemComponent } from './ui-navigation-item.component';

describe('UiNavigationItemComponent', () => {
  let component: UiNavigationItemComponent;
  let fixture: ComponentFixture<UiNavigationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiNavigationItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

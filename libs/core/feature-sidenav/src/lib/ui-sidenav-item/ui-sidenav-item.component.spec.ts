import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSidenavItemComponent } from './ui-sidenav-item.component';

describe('UiSidenavItemComponent', () => {
  let component: UiSidenavItemComponent;
  let fixture: ComponentFixture<UiSidenavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSidenavItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

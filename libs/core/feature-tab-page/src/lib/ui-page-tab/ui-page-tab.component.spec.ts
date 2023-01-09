import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageTabComponent } from './ui-page-tab.component';

describe('UiPageTabComponent', () => {
  let component: UiPageTabComponent;
  let fixture: ComponentFixture<UiPageTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiPageTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

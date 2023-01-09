import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageLayoutComponent } from './ui-page-layout.component';

describe('UiPageLayoutComponent', () => {
  let component: UiPageLayoutComponent;
  let fixture: ComponentFixture<UiPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiPageLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

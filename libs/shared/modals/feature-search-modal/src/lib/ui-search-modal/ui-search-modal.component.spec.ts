import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSearchModalComponent } from './ui-search-modal.component';

describe('UiSearchModalComponent', () => {
  let component: UiSearchModalComponent;
  let fixture: ComponentFixture<UiSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSearchModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UiSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorBenchmarkComponent } from './selector-benchmark.component';

describe('SelectorBenchmarkComponent', () => {
  let component: SelectorBenchmarkComponent;
  let fixture: ComponentFixture<SelectorBenchmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorBenchmarkComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGraphComponent } from './icon-graph.component';

describe('IconGraphComponent', () => {
  let component: IconGraphComponent;
  let fixture: ComponentFixture<IconGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

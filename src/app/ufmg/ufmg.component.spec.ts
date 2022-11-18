import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfmgComponent } from './ufmg.component';

describe('UfmgComponent', () => {
  let component: UfmgComponent;
  let fixture: ComponentFixture<UfmgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UfmgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfmgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColtecComponent } from './coltec.component';

describe('ColtecComponent', () => {
  let component: ColtecComponent;
  let fixture: ComponentFixture<ColtecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColtecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

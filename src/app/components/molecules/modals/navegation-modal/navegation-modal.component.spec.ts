import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationModalComponent } from './navegation-modal.component';

describe('NavegationModalComponent', () => {
  let component: NavegationModalComponent;
  let fixture: ComponentFixture<NavegationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

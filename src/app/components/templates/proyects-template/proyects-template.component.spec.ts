import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsTemplateComponent } from './proyects-template.component';

describe('ProyectsTemplateComponent', () => {
  let component: ProyectsTemplateComponent;
  let fixture: ComponentFixture<ProyectsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

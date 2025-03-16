import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTemplateComponent } from './skills-template.component';

describe('SkillsTemplateComponent', () => {
  let component: SkillsTemplateComponent;
  let fixture: ComponentFixture<SkillsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

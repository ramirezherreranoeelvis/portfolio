import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeTemplateComponent } from './about-me-template.component';

describe('AboutMeTemplateComponent', () => {
  let component: AboutMeTemplateComponent;
  let fixture: ComponentFixture<AboutMeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesTemplateComponent } from './resources-template.component';

describe('ResourcesTemplateComponent', () => {
  let component: ResourcesTemplateComponent;
  let fixture: ComponentFixture<ResourcesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { SkillsTemplateComponent } from '../components/templates/skills-template/skills-template.component';

@Component({
  selector: 'skills',
  imports: [SkillsTemplateComponent],
  template: '<skills-template/>'
})
export class SkillsComponent {

}

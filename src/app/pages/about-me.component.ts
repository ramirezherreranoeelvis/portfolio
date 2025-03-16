import { Component } from '@angular/core';
import { AboutMeTemplateComponent } from '../components/templates/about-me-template/about-me-template.component';

@Component({
  selector: 'about-me',
  imports: [AboutMeTemplateComponent],
  template: '<about-me-template/>',
})
export class AboutMeComponent {

}

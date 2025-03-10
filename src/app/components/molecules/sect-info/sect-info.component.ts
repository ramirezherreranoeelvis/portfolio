import { Component, input } from '@angular/core';

@Component({
      selector: 'sect-info',
      imports: [],
      templateUrl: './sect-info.component.html',
      styleUrl: './sect-info.component.scss'
})
export class SectInfoComponent {
      public title = input("");
}

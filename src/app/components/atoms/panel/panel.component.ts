import { Component, input } from '@angular/core';

@Component({
      selector: 'panel',
      imports: [],
      templateUrl: './panel.component.html',
      styleUrl: './panel.component.scss',
})
export class PanelComponent {
        className = input<string>("");
}

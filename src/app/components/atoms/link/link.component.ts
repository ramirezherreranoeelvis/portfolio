import { Component, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
      selector: 'url',
      imports: [RouterLink],
      template: `
            <a [routerLink]="href()" [class]="className()">{{value()}}</a>
      `,
      styles: `
            a{
                  @apply size-full;
            }
      `
})
export class LinkComponent {
      public className = input<string>("");
      public href = input<string>("");
      public value = input<string>("");
}

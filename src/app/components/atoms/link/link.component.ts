import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
      selector: 'url',
      imports: [RouterLink],
      template: `
            @if (isExternal()) {
                  <a [href]="href()" target="_blank" [class]="className()">
                        {{ value() }}
                  </a>
            } @else {
                  <a [routerLink]="href()" [class]="className()">
                        {{ value() }}
                  </a>
            }
      `,
      styles: `
            @import 'tailwindcss';
            a {
                  @apply size-full transition-all duration-300 ease-in-out;
            }
      `,
})
export class LinkComponent {
      public className = input<string>('');
      public href = input<string>('');
      public value = input<string>('');
      public isExternal = input<boolean>(false);
}

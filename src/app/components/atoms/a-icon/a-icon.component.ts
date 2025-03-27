import { Component, input } from '@angular/core';

/**
 * @param {string} classIcon - class icon in bootstrap
 * @param {string} className - class styles
 * @param {string} href - text url for link
 */
@Component({
      selector: 'a-icon',
      template: `
            <a
                  [href]="href()"
                  target="_blank"
                  rel="noopener noreferrer"
                  [class]="className()"
            >
                  <i [class]="classIcon()"></i>
            </a>
      `,
      styles: `
            @import 'tailwindcss';
            a {
                  @apply size-full;
            }
      `,
})
export class AIconComponent {
      public classIcon = input<string>('');
      public className = input<string>('');
      public href = input<string>('');
}

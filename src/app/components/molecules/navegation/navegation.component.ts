import { Component, input } from '@angular/core';
import { IUrl } from './url';
import { LinkComponent } from '../../atoms/link/link.component';

/**
 * @param {IUrl} urls - Array of URLs
 * @param {string} className - classStyles in tailwind
 * @param {string} classNameUrl - classStyles in tailwind for component url
 */
@Component({
      selector: 'navegation',
      imports: [LinkComponent],
      templateUrl: './navegation.component.html',
      styleUrl: './navegation.component.scss',
})
export class NavegationComponent {
      public urls = input<IUrl[]>([]);
      public className = input<string>('');
      public classNameUrl = input<string>('');
}

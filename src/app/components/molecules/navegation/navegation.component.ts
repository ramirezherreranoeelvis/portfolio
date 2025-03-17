import { Component, input } from '@angular/core';
import { IUrl } from './url';
import { LinkComponent } from '../../atoms/link/link.component';

@Component({
      selector: 'navegation',
      imports: [LinkComponent],
      templateUrl: './navegation.component.html',
      styleUrl: './navegation.component.scss',
})
export class NavegationComponent {
      public urls = input<IUrl[]>([]);
      public className = input('');
      public classNameUrl = input('');
}

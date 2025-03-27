import { Component, input } from '@angular/core';
import { NavegationComponent } from '../../navegation/navegation.component';
import { IUrl } from '../../navegation/url';
/**
 * @param {IUrl} urls - Array of URLs
 */
@Component({
      selector: 'navegation-modal',
      imports: [NavegationComponent],
      templateUrl: './navegation-modal.component.html',
      styleUrl: './navegation-modal.component.scss',
})
export class NavegationModalComponent {
      public urls = input<IUrl[]>([]);
}

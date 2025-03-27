import { Component, output, signal } from '@angular/core';
import {
      animate,
      state,
      style,
      transition,
      trigger,
} from '@angular/animations';
/**
 * @param {EventEmitter} clickMenu - event click
 */
@Component({
      selector: 'hamburger-menu',
      template: `
            <div class="menu" (click)="handleClick()">
                  <div class="menu__line" [@line1]="active()"></div>
                  <div class="menu__line" [@line2]="active()"></div>
                  <div class="menu__line" [@line3]="active()"></div>
            </div>
      `,
      styleUrl: './hamburger-menu.component.scss',
      animations: [
            trigger('line1', [
                  state(
                        'closed',
                        style({
                              transform: 'translate3d(0, 0, 0) rotate(0deg)',
                        }),
                  ),
                  state(
                        'open',
                        style({ transform: 'rotate(38deg) scaleX(1.24)' }),
                  ),
                  transition('closed <=> open', [
                        animate('.3s cubic-bezier(0.4, 0, 0.2, 1)'),
                  ]),
            ]),
            trigger('line2', [
                  state(
                        'closed',
                        style({
                              opacity: '1',
                        }),
                  ),
                  state('open', style({ opacity: '0' })),
                  transition('closed <=> open', [
                        animate('.1s cubic-bezier(0.4, 0, 0.2, 1)'),
                  ]),
            ]),
            trigger('line3', [
                  state(
                        'closed',
                        style({
                              transform: 'rotate(0) scaleX(1)',
                        }),
                  ),
                  state(
                        'open',
                        style({ transform: 'rotate(-38deg) scaleX(1.24)' }),
                  ),
                  transition('closed <=> open', [
                        animate('.3s cubic-bezier(0.4, 0, 0.2, 1)'),
                  ]),
            ]),
      ],
})
export class HamburgerMenuComponent {
      public clickMenu = output();
      protected active = signal<'open' | 'closed'>('closed');

      protected handleClick(): void {
            this.clickMenu.emit();
            this.active.update((state) =>
                  state === 'closed' ? 'open' : 'closed',
            );
      }
}

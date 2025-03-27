import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegationComponent } from './components/molecules/navegation/navegation.component';
import { IUrl } from './components/molecules/navegation/url';
import { HamburgerMenuComponent } from './components/atoms/hamburger-menu/hamburger-menu.component';
import { NavegationModalComponent } from './components/molecules/modals/navegation-modal/navegation-modal.component';
import { AIconComponent } from './components/atoms/a-icon/a-icon.component';

@Component({
      selector: 'app-root',
      imports: [
            RouterOutlet,
            NavegationComponent,
            HamburgerMenuComponent,
            NavegationModalComponent,
            AIconComponent,
      ],
      templateUrl: './app.component.html',
      styleUrl: './app.component.scss',
})
export class AppComponent {
      protected urls: IUrl[] = [
            { title: 'Sobre mi', url: '' },
            { title: 'Proyectos', url: 'proyects' },
            { title: 'Skills', url: 'skills' },
            { title: 'Recursos', url: 'resources' },
            {
                  title: 'Github',
                  url: 'https://github.com/ramirezherreranoeelvis',
                  isExternal: true,
            },
      ];
      protected menu = viewChild.required<ElementRef>('modalNavegation');

      openModal() {
            const menuHtmlClassList = this.menu().nativeElement.classList;

            if (menuHtmlClassList.contains('active')) {
                  menuHtmlClassList.remove('active');
            } else {
                  menuHtmlClassList.add('active');
            }
      }
}

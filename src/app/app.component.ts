import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegationComponent } from './components/molecules/navegation/navegation.component';
import { IUrl } from './components/molecules/navegation/url';
import { HamburgerMenuComponent } from "./components/atoms/hamburger-menu/hamburger-menu.component";

@Component({
      selector: 'app-root',
      imports: [RouterOutlet, NavegationComponent, HamburgerMenuComponent],
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
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelComponent } from './components/atoms/panel/panel.component';
import { SectInfoComponent } from './components/molecules/sect-info/sect-info.component';
import { NavegationComponent } from './components/molecules/navegation/navegation.component';
import { IUrl } from './components/molecules/navegation/url';

@Component({
      selector: 'app-root',
      imports: [
            RouterOutlet,
            NavegationComponent,
            PanelComponent,
      ],
      templateUrl: './app.component.html',
      styleUrl: './app.component.scss',
})
export class AppComponent {
      protected urls: IUrl[] = [
            { title: 'Home', url: '#' },
            { title: 'Sobre mi', url: '#' },
            { title: 'Conocimientos', url: '#' },
      ];
}

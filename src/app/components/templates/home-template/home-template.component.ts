import { Component } from '@angular/core';
import { NavegationComponent } from '../../molecules/navegation/navegation.component';
import { IUrl } from '../../molecules/navegation/url';
import { SectInfoComponent } from '../../molecules/sect-info/sect-info.component';
import { PanelComponent } from '../../atoms/panel/panel.component';

@Component({
      selector: 'home-template',
      imports: [
            NavegationComponent,
            SectInfoComponent,
            PanelComponent
      ],
      templateUrl: './home-template.component.html',
      styleUrl: './home-template.component.scss'
})
export class HomeTemplateComponent {
      protected urls: IUrl[] = [
            { title: 'Home', url: '#' },
            { title: 'Sobre mi', url: '#' },
            { title: 'Conocimientos', url: '#' }
      ]
}

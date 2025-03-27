import { Component } from '@angular/core';
import { CardProyectComponent } from '../../molecules/card-proyect/card-proyect.component';

@Component({
      selector: 'proyects-template',
      imports: [CardProyectComponent],
      templateUrl: './proyects-template.component.html',
      styleUrl: './proyects-template.component.scss',
})
export class ProyectsTemplateComponent {
      proyects = [
            'images/proyects/proyecto1.webp',
            'images/proyects/proyecto2.webp',
            'images/proyects/proyecto3.webp',
            'images/proyects/proyecto4.webp',
            'images/proyects/proyecto5.webp',
            'images/proyects/proyecto6.webp',
      ];
}

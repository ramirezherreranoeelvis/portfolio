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
            'assets/images/proyects/proyecto1.png',
            'assets/images/proyects/proyecto2.png',
            'assets/images/proyects/proyecto3.jpg',
            'assets/images/proyects/proyecto4.png',
            'assets/images/proyects/proyecto5.png',
            'assets/images/proyects/proyecto6.png',
      ];
}

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
            { portada: 'images/proyects/proyecto1.webp', github:"https://github.com/ramirezherreranoeelvis/Colegio" },
            { portada: 'images/proyects/proyecto2.webp' },
            { portada: 'images/proyects/proyecto3.webp' },
            { portada: 'images/proyects/proyecto4.webp' },
            { portada: 'images/proyects/proyecto5.webp' },
            { portada: 'images/proyects/proyecto6.webp' },
      ];
}
